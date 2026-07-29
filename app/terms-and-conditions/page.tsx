import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SMS Terms of Service',
  description:
    'SMS Terms of Service for Fatboy Supper Club — message frequency, rates, opt-out, and help.',
}

export default function TermsAndConditions() {
  return (
    <main className="legal">
      <div className="legal-inner">
        <h1>SMS Terms of Service</h1>

        <p className="legal-meta">
          <strong>Fatboy Supper Club</strong>
          <br />
          Effective date: 07/28/2026
        </p>

        <h2>Program name and description</h2>

        <p>
          By providing your mobile phone number and agreeing at checkout, you
          consent to receive SMS text messages from{' '}
          <strong>Fatboy Supper Club</strong> related to your reservation. These
          messages include reservation confirmations, reminders, and responses
          to your support questions. This is a conversational and transactional
          messaging program; messages are tied to your reservation and
          inquiries.
        </p>

        <h2>Message frequency</h2>

        <p>
          Message frequency varies based on your reservation activity and any
          questions you send us. You will generally receive messages such as a
          confirmation when you book, a reminder before your dining date, and
          replies when you contact us.
        </p>

        <h2>Cost</h2>

        <p>
          <strong>Message and data rates may apply.</strong> Fatboy Supper Club
          does not charge for the messages themselves, but your mobile
          carrier&rsquo;s standard message and data rates may apply depending on
          your plan.
        </p>

        <h2>How to opt out</h2>

        <p>
          You can cancel the SMS program at any time by replying{' '}
          <strong>STOP</strong> to any message. After you send{' '}
          <strong>STOP</strong>, we will send you a confirmation and will not
          send you any further SMS messages unless you opt in again.
        </p>

        <h2>How to get help</h2>

        <p>
          For help, reply <strong>HELP</strong> to any message, or contact us
          directly at{' '}
          <a href="mailto:fatboysupperclub@gmail.com">
            fatboysupperclub@gmail.com
          </a>
          . If you are experiencing an issue, we will respond as soon as we are
          able.
        </p>

        <h2>Carrier disclaimer</h2>

        <p>Carriers are not liable for delayed or undelivered messages.</p>

        <h2>Privacy</h2>

        <p>
          Your information is handled in accordance with our{' '}
          <a href="/privacy-policy">Privacy Policy</a>. We do not share your
          phone number with third parties or use it for third-party marketing.
        </p>

        <h2>Contact</h2>

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
