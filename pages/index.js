import Spaceship from "../componants/spaceship.js";
import Font from "../componants/font.js";

export default function Home() {
  return (
    <>
      <main>
        <div className="text-center">
          <Font />
          <Spaceship />
        </div>
      </main>
    </>
  );
}
