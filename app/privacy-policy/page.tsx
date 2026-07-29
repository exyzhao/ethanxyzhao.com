import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for Fatboy Supper Club — how we collect, use, and protect guest information.',
}

export default function PrivacyPolicy() {
  return (
    <main className="legal">
      <div className="legal-inner">
        <h1>Privacy Policy</h1>

        <p className="legal-meta">
          <strong>Fatboy Supper Club</strong>
          <br />
          Effective date: 07/28/2026
        </p>

        <p>
          This Privacy Policy describes how Fatboy Supper Club
          (&ldquo;Fatboy,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;) collects,
          uses, and protects the personal information of guests who book and
          attend our dining experiences.
        </p>

        <h2>Information we collect</h2>

        <p>
          When you reserve a spot at a Fatboy dining experience, we collect:
        </p>

        <ul>
          <li>Your name</li>
          <li>Your email address</li>
          <li>Your mobile phone number</li>
          <li>
            Reservation details (date, party size, and any notes you provide)
          </li>
        </ul>

        <p>
          Payment information is processed by our payment provider, Stripe, and
          is handled under Stripe&rsquo;s own privacy practices. We do not store
          your full card details.
        </p>

        <h2>How we use your information</h2>

        <p>We use the information you provide to:</p>

        <ul>
          <li>Confirm and manage your reservation</li>
          <li>
            Send you SMS messages about your reservation, including
            confirmations, reminders, and support responses
          </li>
          <li>Respond to your inquiries</li>
          <li>
            Communicate important information about your dining experience
          </li>
        </ul>

        <h2>SMS messages</h2>

        <p>
          If you provide your phone number and agree to receive text messages at
          checkout, we will send you SMS messages related to your reservation.
          Message frequency varies. Message and data rates may apply. You can
          opt out at any time by replying <strong>STOP</strong>, or reply{' '}
          <strong>HELP</strong> for assistance. For full details, see our{' '}
          <a href="/terms-and-conditions">SMS Terms of Service</a>.
        </p>

        <h2>How we protect and share your information</h2>

        <p>
          <strong>
            We do not sell, rent, or share your phone number or other personal
            information with third parties, and we do not use your phone number
            for third-party marketing.
          </strong>{' '}
          Mobile information collected for SMS will not be shared with third
          parties or affiliates for marketing or promotional purposes.
        </p>

        <p>
          We only share information with service providers who help us operate
          &mdash; such as our payment processor (Stripe) and our reservation and
          messaging platform &mdash; and only to the extent needed to provide
          our services to you.
        </p>

        <h2>Your choices</h2>

        <p>You may:</p>

        <ul>
          <li>
            Opt out of SMS at any time by replying <strong>STOP</strong>
          </li>
          <li>Request that we delete your information by contacting us</li>
        </ul>

        <h2>Contact us</h2>

        <p>
          For questions about this Privacy Policy or your information, contact:
        </p>

        <p>
          <strong>Fatboy Supper Club</strong>
          <br />
          Email:{' '}
          <a href="mailto:fatboysupperclub@gmail.com">
            fatboysupperclub@gmail.com
          </a>
        </p>
      </div>
    </main>
  )
}
