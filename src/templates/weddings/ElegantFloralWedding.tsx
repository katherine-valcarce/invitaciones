import { useMemo, useState } from "react";
import Countdown from "../../components/Countdown";
import FloralCorner from "../../components/FloralCorner";
import Icon from "../../components/Icon";
import type { WeddingInvitation } from "../../invitations/types";

type ElegantFloralWeddingProps = {
  invitation: WeddingInvitation;
};

function onlyDigits(value: string) {
  return value.replace(/\D/g, "");
}

export default function ElegantFloralWedding({
  invitation,
}: ElegantFloralWeddingProps) {
  const [copied, setCopied] = useState(false);
  const heroSrc = invitation.heroImage
    ? import.meta.env.BASE_URL + invitation.heroImage
    : undefined;
  const heroTiles = (invitation.heroTiles ?? []).map(
    (path) => import.meta.env.BASE_URL + path,
  );

  const whatsappUrl = useMemo(() => {
    const phone = onlyDigits(invitation.rsvp.whatsapp);
    return "https://wa.me/" + phone + "?text=" + encodeURIComponent(invitation.rsvp.message);
  }, [invitation.rsvp.message, invitation.rsvp.whatsapp]);

  const mapsUrl =
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(invitation.venue.name + ", " + invitation.venue.address);

  const bankText = [
    invitation.gift.accountHolder,
    invitation.gift.bank,
    invitation.gift.accountType,
    "N° de cuenta: " + invitation.gift.accountNumber,
    "RUT: " + invitation.gift.rut,
    "Correo: " + invitation.gift.email,
  ].join("\n");

  async function copyBankDetails() {
    try {
      await navigator.clipboard.writeText(bankText);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  return (
    <main className="wedding-page">
      <section className="hero" aria-labelledby="couple-name">
        {heroTiles.length > 0 ? (
          <div
            className="hero__tiles"
            role="img"
            aria-label={invitation.couple.first + " y " + invitation.couple.second}
          >
            {heroTiles.map((src) => (
              <img key={src} src={src} alt="" aria-hidden="true" />
            ))}
          </div>
        ) : (
          heroSrc && (
            <img
              className="hero__image"
              src={heroSrc}
              alt={invitation.couple.first + " y " + invitation.couple.second}
            />
          )
        )}
        <div className="hero__shade" aria-hidden="true" />
        <div className="hero__phrase">{invitation.heroPhrase}</div>
        <FloralCorner position="top-left" />
        <FloralCorner position="top-right" />
        <div className="hero__fade" aria-hidden="true" />
      </section>

      <section className="invitation-shell">
        <FloralCorner position="top-left" className="shell-floral shell-floral--left" />
        <FloralCorner position="top-right" className="shell-floral shell-floral--right" />

        <header className="intro-section reveal">
          <span className="eyebrow">Nos casamos</span>
          <h1 id="couple-name" className="couple-name">
            {invitation.couple.first}
            <span>&amp;</span>
            {invitation.couple.second}
          </h1>
          <div className="ornament" aria-hidden="true">
            <i />
            <span>♥</span>
            <i />
          </div>
          <p className="intro-copy">{invitation.intro}</p>
        </header>

        <section className="date-highlight reveal" aria-label="Fecha del matrimonio">
          <span className="date-highlight__day">06</span>
          <div>
            <span>febrero</span>
            <strong>2027</strong>
          </div>
          <span className="date-highlight__time">{invitation.time}</span>
        </section>

        <section className="countdown-section reveal">
          <span className="eyebrow">Falta poquito</span>
          <Countdown target={invitation.date.iso} />
        </section>

        <section className="details-grid reveal" aria-label="Detalles del evento">
          <article className="detail-card">
            <div className="detail-card__icon">
              <Icon name="calendar" />
            </div>
            <span>Fecha</span>
            <strong>{invitation.date.display}</strong>
          </article>

          <article className="detail-card">
            <div className="detail-card__icon">
              <Icon name="clock" />
            </div>
            <span>Hora</span>
            <strong>{invitation.time}</strong>
          </article>

          <article className="detail-card detail-card--wide">
            <div className="detail-card__icon">
              <Icon name="pin" />
            </div>
            <span>Ceremonia y recepción</span>
            <strong>{invitation.venue.name}</strong>
            <small>{invitation.venue.address}</small>
            <a className="text-link" href={mapsUrl} target="_blank" rel="noreferrer">
              Cómo llegar <Icon name="chevron" size={18} />
            </a>
          </article>

          <article className="detail-card">
            <div className="detail-card__icon">
              <Icon name="hanger" />
            </div>
            <span>Código de vestimenta</span>
            <strong>{invitation.dressCode}</strong>
          </article>
        </section>

        <section className="rsvp-card reveal">
          <div className="rsvp-card__icon">
            <Icon name="whatsapp" size={30} />
          </div>
          <div className="rsvp-card__copy">
            <span>Confirmar asistencia</span>
            <strong>hasta el {invitation.rsvp.deadline}</strong>
            <small>{invitation.rsvp.whatsapp}</small>
          </div>
          <a
            className="button button--primary"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="whatsapp" size={20} />
            Confirmar
          </a>
        </section>

        <p className="special-note reveal">{invitation.specialNote}</p>

        <section className="gift-card reveal" aria-labelledby="gift-title">
          <div className="gift-card__icon">
            <Icon name="gift" size={31} />
          </div>
          <span className="eyebrow">Regalos</span>
          <h2 id="gift-title">{invitation.gift.title}</h2>
          <div className="gift-card__message">
            {invitation.gift.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

          <div className="bank-details">
            <strong>{invitation.gift.accountHolder}</strong>
            <span>{invitation.gift.bank}</span>
            <span>{invitation.gift.accountType}</span>
            <span>N° de cuenta: {invitation.gift.accountNumber}</span>
            <span>RUT: {invitation.gift.rut}</span>
            <span>Correo: {invitation.gift.email}</span>
          </div>

          <button className="button button--secondary" type="button" onClick={copyBankDetails}>
            <Icon name="copy" size={19} />
            {copied ? "¡Datos copiados!" : "Copiar datos bancarios"}
          </button>
        </section>

        <footer className="wedding-footer reveal">
          <div className="ornament" aria-hidden="true">
            <i />
            <span>♥</span>
            <i />
          </div>
          <p>Gracias por acompañarnos en este momento tan especial.</p>
          <span>Antonio &amp; Nicole</span>
        </footer>

        <FloralCorner position="bottom-left" className="shell-floral shell-floral--bottom-left" />
        <FloralCorner position="bottom-right" className="shell-floral shell-floral--bottom-right" />
      </section>
    </main>
  );
}
