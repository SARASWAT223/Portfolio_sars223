export default function ContactForm() {
  return (
    <section id="contact" className="py-20 px-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Your Name" className="border rounded p-3" />
        <input type="email" placeholder="Email" className="border rounded p-3" />
        <textarea placeholder="Message" className="border rounded p-3" rows={5}></textarea>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Send
        </button>
      </form>
    </section>
  );
}
