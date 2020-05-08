import React from 'react';

const imagesInfo = [
  {
    image: '/images/insta/1.png',
    translateRatio: -50
  },
  {
    image: '/images/insta/2.jpg',
    translateRatio: 30
  },
  {
    image: '/images/insta/3.jpg',
    translateRatio: 0
  },
  {
    image: '/images/insta/4.jpg',
    translateRatio: -20
  },
  {
    image: '/images/insta/5.jpg',
    translateRatio: -80
  }
];

export default class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.followContainer = React.createRef();
    this.images = [];

    this.animate = this.animate.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.animate();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    window.requestAnimationFrame(this.animate);
  };

  animate() {
    const dimensions = this.followContainer.current.getBoundingClientRect();

    if (dimensions.top - window.innerHeight < 0 && dimensions.bottom > 0) {
      const scrolledRatio =
        (window.innerHeight - dimensions.top) / window.innerHeight;

      this.images.forEach((image, index) => {
        const translateRatio = imagesInfo[index] ? imagesInfo[index].translateRatio : 0;
        image &&
          (image.style.transform = `translateY(${scrolledRatio * translateRatio}px)`);
      });
    }
  };

  render() {
    return (
      <footer className="pt-5">
        <div
          ref={this.followContainer}
          className="custom-container px-3 mb-5 footer-follow"
        >
          <div className="row footer-follow--header">
            <div className="px-3 footer-follow--title">
              <p
                className="font-size-display1 mb-3"
                style={{ maxWidth: '26rem' }}
              >
                Follow us on instagram for more updates
              </p>
              <div className="d-flex">
                <a
                  href="/about"
                  className="d-flex py-3 align-items-center font-color-black borderbottom border-color-black"
                >
                  <p className="mr-3">Follow us</p>
                  <img src="/icon/arrow-long-right.svg" />
                </a>
              </div>
            </div>
          </div>
          <div className="d-flex footer-follow--images">
            {imagesInfo.map((item, i) => (
              <div key={i} className="justify-content-sm-end flex-column follow-images">
                <div
                  ref={image => this.images.push(image)}
                  style={{
                    paddingBottom: '100%',
                    background: `url("${item.image}") center center/cover`
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="custom-container mb-5 pb-5 pt-5">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-4">
              <p className="font-family-secondary font-size-display1 mb-4">
                Commerce.js
              </p>
              <div className="d-flex font-color-medium mb-5 pb-3 pb-md-0 mb-md-0">
                <div className="pr-5">
                  <a
                    href="https://commercejs.com/docs/"
                    className="mb-3 d-block font-color-medium"
                  >
                    Documentation
                  </a>
                  <a
                    href="https://commercejs.com/features"
                    className="d-block font-color-medium"
                  >
                    Features
                  </a>
                </div>
                <div>
                  <a
                    href="https://commercejs.com/company/about"
                    className="mb-3 d-block font-color-medium"
                  >
                    About
                  </a>
                  <a
                    href="http://slack.commercejs.com/"
                    className="d-block font-color-medium"
                  >
                    Community
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4">
              <p className="font-family-secondary font-size-display1 mb-4">
                Follow us
              </p>
              <div className="d-flex font-color-medium mb-5 pb-3 pb-md-0 mb-md-0">
                <div className="pr-5">
                  <a
                    href="https://twitter.com/commercejs"
                    className="mb-3 d-block font-color-medium"
                  >
                    Twitter
                  </a>
                  <a
                    href="https://www.instagram.com/commerce.js/"
                    className="d-block font-color-medium"
                  >
                    Instagram
                  </a>
                </div>
                <div>
                  <a
                    href="https://angel.co/company/chec"
                    className="mb-3 d-block font-color-medium"
                  >
                    Angel
                  </a>
                  <a
                    href="https://www.linkedin.com/company/chec-chec-commerce-inc.-/"
                    className="d-block font-color-medium"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <p className="font-family-secondary font-size-display1 mb-3">
                Newsletter
              </p>
              <div className="position-relative">
                <input
                  className="borderbottom border-color-gray400 h-48 w-100 px-3"
                  placeholder="email address"
                />
                <button className="bg-transparent position-absolute right-0 top-50 translateY--50 pr-2 h-48">
                  <img src="/icon/arrow-long-right.svg" className="w-24" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-md-5">
          <div className="bg-brand300">
            <div className="custom-container d-flex flex-column flex-md-row align-items-center justify-content-between">
              <div className="pt-5 pb-0 pt-md-4 pb-md-4 d-flex align-items-center flex-wrap justify-content-center">
                <a
                  href="https://app.netlify.com/start/deploy?repository=https://github.com/chec/commercejs-nextjs-demo-store"
                  className="font-color-brand font-size-caption text-uppercase text-center"
                >
                  Deploy to Netlify
                </a>
                <p className="px-2 font-color-brand font-size-caption">-</p>
                <a
                  href="https://github.com/chec/commercejs-nextjs-demo-store"
                  className="font-color-brand font-size-caption text-uppercase text-center"
                >
                  Clone in GitHub
                </a>
                <p className="px-2 font-color-brand font-size-caption">-</p>
                <a
                  href="https://app.netlify.com/start/deploy?repository=https://github.com/chec/commercejs-nextjs-demo-store"
                  className="font-color-brand font-size-caption text-uppercase text-center"
                >
                  Contribute
                </a>
              </div>
              <div className="font-color-brand font-size-caption py-4 text-right">
              <a
                  href="https://commercejs.com/"
                  className="font-color-brand font-size-caption text-uppercase text-center"
                >
                  &copy; 2020 Chec/Commerce.js.
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
