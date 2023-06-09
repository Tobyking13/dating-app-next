import Image from 'next/image'
import hamster from '../../public/images/hamster.jpg';


export default function WelcomeCards() {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m4">
          <div className="card">
            <div className="card-image">
            <Image src={hamster} alt="hamster image" width={300} height={200} />
            </div>
            <div className="card-content">
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="card">
            <div className="card-image">
            <Image src={hamster} alt="hamster image" width={300} height={200} />
            </div>
            <div className="card-content">
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="card">
            <div className="card-image">
            <Image src={hamster} alt="hamster image" width={300} height={200} />
            </div>
            <div className="card-content">
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
