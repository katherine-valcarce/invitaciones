export type WeddingInvitation = {
  slug: string;
  couple: {
    first: string;
    second: string;
  };
  heroImage?: string;
  heroTiles?: string[];
  heroPhrase: string;
  intro: string;
  date: {
    display: string;
    iso: string;
  };
  time: string;
  venue: {
    name: string;
    address: string;
  };
  dressCode: string;
  rsvp: {
    deadline: string;
    whatsapp: string;
    message: string;
  };
  specialNote: string;
  gift: {
    title: string;
    lines: string[];
    accountHolder: string;
    bank: string;
    accountType: string;
    accountNumber: string;
    rut: string;
    email: string;
  };
};
