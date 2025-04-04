"use client";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [to, setTo] = useState("");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  // Fonction pour valider l'email
  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Vérifications des champs
    if (!name.trim()) {
      toast.error("Veuillez entrer votre nom.", { duration: 5000 });
      return;
    }
    if (!to.trim()) {
      toast.error("Veuillez entrer votre email.", { duration: 5000 });
      return;
    }
    if (!validateEmail(to)) {
      toast.error("Veuillez entrer un email valide.", { duration: 5000 });
      return;
    }
    if (!text.trim()) {
      toast.error("Veuillez entrer votre message.", { duration: 5000 });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to,
          subject: "Message à Hikani foundation",
          text,
          name,
        }),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi du message.");
      }

      toast.success(
        "Votre message a été envoyé avec succès à Hikani Foundation.",
        { duration: 6000 },
      );
      setTo("");
      setText("");
      setName("");
    } catch (err) {
      console.error(err);
      toast.error("Une erreur est survenue lors de l'envoi du message.", {
        duration: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Contactez-nous
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Nous sommes là pour répondre à vos questions et écouter vos
                idées. N'hésitez pas à nous contacter pour en savoir plus sur
                nos actions ou pour nous soutenir.
              </p>
              <form>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Votre Nom
                      </label>
                      <input
                        type="text"
                        placeholder="Entrez votre nom"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Votre Email
                      </label>
                      <input
                        type="email"
                        placeholder="Entrez votre email"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        value={to}
                        onChange={(e) => setTo(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Votre Message
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Entrez votre message"
                        className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button
                      type="button"
                      disabled={loading}
                      onClick={handleSubmit}
                      className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                    >
                      {loading ? "Envoi en cours..." : "Envoyer"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </section>
  );
};

export default Contact;
