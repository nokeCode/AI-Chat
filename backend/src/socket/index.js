const supabase = require("../services/supabase");

function socketHandler(io) {
  io.on("connection", async (socket) => {
    console.log("🟢 User connected:", socket.id);

    // envoyer historique messages
    const { data } = await supabase
      .from("messages")
      .select("*")
      .order("created_at", { ascending: true });

    socket.emit("previousMessages", data);

    // réception message
    socket.on("message", async (msg) => {
      console.log("📩 Message:", msg);

      // save DB
      await supabase.from("messages").insert([
        {
          user_id: msg.user_id,
          content: msg.content,
        },
      ]);

      // broadcast
      io.emit("message", msg);
    });

    socket.on("disconnect", () => {
      console.log("🔴 Disconnected:", socket.id);
    });
  });
}

module.exports = socketHandler;