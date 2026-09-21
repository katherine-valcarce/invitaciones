import type { WeddingInvitation } from "../../types";

const invitation: WeddingInvitation = {
  slug: "antonio-nicole",
  couple: {
    first: "Antonio",
    second: "Nicole",
  },
  heroImage: "assets/matrimonios/antonio-nicole/pareja.webp",
  heroPhrase: "Para siempre juntos",
  intro:
    "Queremos compartir con ustedes uno de los días más importantes de nuestras vidas",
  date: {
    display: "06 de febrero 2027",
    iso: "2027-02-06T16:15:00-03:00",
  },
  time: "16:15 hrs",
  venue: {
    name: "Casa mami Elia",
    address: "Avda General Oscar Bonilla 8719",
  },
  dressCode: "Semi formal",
  rsvp: {
    deadline: "01 de febrero 2027",
    whatsapp: "+56 9 6174 6372",
    message:
      "Hola Antonio y Nicole 🤍 Quisiera confirmar mi asistencia a su matrimonio del 06 de febrero de 2027.",
  },
  specialNote: "Vengan a pasarlo bonito",
  gift: {
    title: "Tu presencia es nuestro mejor regalo",
    lines: [
      "Si deseas hacernos un presente, aquí encontrarás más detalles.",
    ],
    accountHolder: "René Antonio Flores Silva",
    bank: "Banco Estado",
    accountType: "Cuenta RUT",
    accountNumber: "19658429",
    rut: "19.658.429-3",
    email: "rf.rene@gmail.com",
  },
};

export default invitation;
