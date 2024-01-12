import styleP from '@/styles/Pricing.module.css'

export default function Pricing() {
  return (
    <main className={`${styleP.pricingContainer}`}>
      <h1 className="font-black text-2xl">🌟 Pricing 🌟</h1>
      <div className={`${styleP.container}`}>
        <div className={`${styleP.subContainer}`} >
          <h2 className="font-black text-2xl">Fremium Plan</h2>
          <p>Swap-Ai's free plan allows you to swap your image with your favorite character for free! You can download the image from the website and you will also receive the email.</p>

          <h3 className="font-black text-xl">Features</h3>
          <ul>
            <li>Swap your image with your favorite character</li>
            <li>Download the image from the website but attribution is needed</li>
            <li>Receive emails from the website</li>
          </ul>

          <h3 className="font-black text-xl">Limitations</h3>
          <ul>
            <li>100 conversions / month</li>
          </ul>

          <h3 className="font-black text-xl">Pricing</h3>
          <ul>
            <li>Free</li>
          </ul>

          <h3 className="font-black text-xl">Payment</h3>
          <ul>
            <li>None</li>
          </ul>

          <h3 className="font-black text-xl">Duration</h3>
          <ul>
            <li>Forever</li>
          </ul>
        </div>
        <div className={`${styleP.subContainer}`}>
          <h2 className="font-black text-2xl">Premium Plan</h2>
          <p>Swap-Ai's free plan allows you to swap your image with your favorite character for free! You can download the image from the website and you will also receive the email.</p>

          <h3 className="font-black text-xl">Features</h3>
          <ul>
            <li>Swap your image with your favorite character</li>
            <li>Download the image from the website no attribution is needed</li>
            <li>Receive emails from the website</li>
          </ul>

          <h3 className="font-black text-xl">Limitations</h3>
          <ul>
            <li>1000 conversions / month</li>
          </ul>

          <h3 className="font-black text-xl">Pricing</h3>
          <ul>
            <li>$10 per month</li>
          </ul>

          <h3 className="font-black text-xl">Payment</h3>
          <ul>
            <li>PayPal</li>
          </ul>

          <h3 className="font-black text-xl">Duration</h3>
          <ul>
            <li>30 days</li>
          </ul>
        </div>
        <div className={`${styleP.subContainer}`}>
          <h2 className="font-black text-2xl">Enterprise Plan</h2>
          <p>Swap-Ai's free plan allows you to swap your image with your favorite character for free! You can download the image from the website and you will also receive the email.</p>

          <h3 className="font-black text-xl">Features</h3>
          <ul>
            <li>Swap your image with your favorite character</li>
            <li>Download the image from the website no attribution is needed</li>
            <li>Receive emails from the website</li>
          </ul>

          <h3 className="font-black text-xl">Limitations</h3>
          <ul>
            <li>Can be negotiated</li>
          </ul>

          <h3 className="font-black text-xl">Pricing</h3>
          <ul>
            <li>Negotiable</li>
          </ul>

          <h3 className="font-black text-xl">Payment</h3>
          <ul>
            <li>PayPal</li>
          </ul>

          <h3 className="font-black text-xl">Duration</h3>
          <ul>
            <li>Negotiable</li>
          </ul>
        </div>
      </div>
    </main>
  );
}