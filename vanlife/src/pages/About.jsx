import { Link } from "react-router-dom";

export default function About() {
  return (
    <main className="about--container">
        <img src="https://s3-alpha-sig.figma.com/img/370c/d3ba/87f1968974ee12ce5da85059cc83bb81?Expires=1689552000&Signature=M~JSfQ-yHC~4WZRKb4IOGK4W72uoRMJ7c1FqOOQGsBoRFUMAqcNVEHaVCatP9v4yR-ozhAh64Vgoq7~a2fcBd-DFOlK6lBl7JPsn4~hPwpTx7MDNvgBN7X93J1Hj0X5nZHO8eINJm-j~Pc6IioyUA13TAkdEp~G-lxex5xW~T5P6xcgXWTEXkc~3n~5qMdHgjzjQSPiCgakDKCgapyD-LFfRl7J7lc5wXNuUDhkbpF-nVEHY1PrfCB4WDfZRNko34zphOip~Vg3nS3O-ibVqxXbnTSx-yLF-KqMjR9cxKq-r2p639BAotVEOR1SxeNzMriKqImLEr5A12xA6qIzldQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" className="about--image"  alt=""></img>
      <div className="about--content">
        <div>
          <h2>Don’t squeeze in a sedan when you could relax in a van.</h2>
          <p>
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch.
            <br />
            (Hitch costs extra 😉)
          </p>
          <p>
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
        </div>
        <div className="about--ctaCard">
            <h3>Your destination is waiting. Your van is ready.</h3>
            <Link className="cta exploreVanBtn" to="/vans">Explore our vans</Link>
        </div>
      </div>
    </main>
  );
}
