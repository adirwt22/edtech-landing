import {
  ArrowRight,
  Bell,
  BookOpen,
  Clock3,
  PlayCircle,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

function PhoneScreen() {
  return (
    <div className="phone">
      <div className="phone-notch">
        <span />
      </div>

      <div className="phone-screen">

        {/* Header */}
        <div className="phone-top">
          <div>
            <span className="phone-greeting">
              Hi, Aditya 👋
            </span>

            <strong>Find your next skill</strong>
          </div>

          <Bell size={17} />
        </div>

        {/* Search */}
        <div className="phone-search">
          <span>⌕</span>
          Search courses...
        </div>

        {/* Popular Courses */}
        <div className="phone-section-title">
          <strong>Popular Courses</strong>
          <span>See all</span>
        </div>

        <div className="phone-courses">

          <div className="phone-course">
            <div className="course-thumb purple-thumb">
              <BookOpen size={27} />
            </div>

            <strong>Web Development</strong>

            <small>
              Build modern websites
            </small>

            <span className="rating">
              ★ 4.8
            </span>
          </div>

          <div className="phone-course">
            <div className="course-thumb teal-thumb">
              <Sparkles size={27} />
            </div>

            <strong>UI/UX Design</strong>

            <small>
              Design beautiful apps
            </small>

            <span className="rating">
              ★ 4.6
            </span>
          </div>

        </div>

        {/* Categories */}
        <div className="phone-section-title categories-title">
          <strong>Categories</strong>
          <span>See all</span>
        </div>

        <div className="phone-categories">

          <div>
            <Sparkles size={14} />
            <small>Code</small>
          </div>

          <div>
            <Sparkles size={14} />
            <small>Design</small>
          </div>

          <div>
            <Sparkles size={14} />
            <small>Marketing</small>
          </div>

          <div>
            <Sparkles size={14} />
            <small>Business</small>
          </div>

        </div>

        {/* Progress */}
        <div className="learning-progress">

          <div className="progress-icon">
            <ShieldCheck size={22} />
          </div>

          <div className="progress-info">
            <strong>Keep learning</strong>
            <small>Frontend Mastery</small>
          </div>

          <strong className="progress-number">
            72%
          </strong>

          <div className="progress-line">
            <span />
          </div>

        </div>

      </div>
    </div>
  );
}

function FloatingCard({
  type,
  icon,
  title,
  text,
}: {
  type: string;
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className={`hero-floating-card ${type}`}>

      <div className="floating-icon">
        {icon}
      </div>

      <div className="floating-content">
        <strong>{title}</strong>
        <span>{text}</span>
      </div>

    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="home">

      {/* Background glow */}
      <div className="hero-glow hero-glow-1" />
      <div className="hero-glow hero-glow-2" />
      <div className="hero-glow hero-glow-3" />

      <div className="container hero-container">

        {/* ================= LEFT CONTENT ================= */}

        <div className="hero-content">

          <div className="hero-badge">
            <span />
            Empowering Education
          </div>

          <h1>
            Learn Smart.
            <br />

            Achieve{" "}

            <span className="gradient-text">
              More.
            </span>
          </h1>

          <p>
            We provide the best online courses,
            expert guidance, and resources to help
            you grow and succeed.
          </p>

          
<div className="hero-actions">
  <a
    href="#academic-experience"
    className="hero-primary-btn"
  >
    Explore Courses
    <ArrowRight size={18} />
  </a>

  <a
    href="#learning-approach"
    className="hero-secondary-btn"
  >
    <PlayCircle size={18} />
    Watch Demo
  </a>
</div>


          {/* Trust */}
          <div className="hero-trust">

            <div className="trust-avatars">

              <span>AR</span>
              <span>SK</span>
              <span>RK</span>

            </div>

            <div className="trust-info">

              <div className="trust-stars">
                ★★★★★
              </div>

              <span>
                Trusted by 10,000+ learners
              </span>

            </div>

          </div>

        </div>


        {/* ================= RIGHT VISUAL ================= */}

        <div className="hero-visual">

          {/* Orbit rings */}

          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />

          {/* Orbit dots */}

          <div className="orbit-dot dot-one" />
          <div className="orbit-dot dot-two" />
          <div className="orbit-dot dot-three" />
          <div className="orbit-dot dot-four" />

          {/* Phone */}

          <div className="phone-wrapper">
            <PhoneScreen />
          </div>


          {/* Expert Instructor */}

          <FloatingCard
            type="expert-card"
            icon={<Users size={24} />}
            title="Expert Instructors"
            text="Learn from industry experts"
          />


          {/* Flexible Learning */}

          <FloatingCard
            type="flexible-card"
            icon={<Clock3 size={24} />}
            title="Flexible Learning"
            text="Learn at your own pace"
          />


          {/* Certification */}

          <FloatingCard
            type="certificate-card"
            icon={<ShieldCheck size={24} />}
            title="Get Certified"
            text="Boost your career"
          />

        </div>

      </div>

    </section>
  );
}