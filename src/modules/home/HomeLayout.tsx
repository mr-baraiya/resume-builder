import { AnimationGeneratorType, motion, useAnimation } from 'framer-motion';
import { NavBarActions, StyledButton } from '../builder/nav-bar/atoms';

import { Button } from '@mui/material';
import FeatureSection from './components/Feature';
import Image from 'next/image';
import Link from 'next/link';

const HomeLayout = () => {
  const controls = useAnimation();
  const animationEffectsHoverEnter = { scale: 1.05 };
  const animationEffectsHoverLeave = { scale: 1 };
  const animationEffectsFirstLoad = {
    scale: [0.9, 1],
    opacity: [0, 1],
  };
  const transitionEffects = {
    type: 'spring' as AnimationGeneratorType,
    stiffness: 400,
    damping: 17,
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }} className="scroll-smooth">
      <nav className="sticky top-0 z-20 h-16 w-full bg-resume-800 flex py-2.5 px-4 xl:px-60 items-center shadow-level-8dp">
        <Link href="/" className="flex items-center gap-2">
          <Image src={'/icons/resume-icon.png'} alt="logo" height="36" width="36" />
          <span className="text-white font-semibold tracking-wide">Campus Resume Studio</span>
        </Link>
        <div className="flex-auto flex justify-end items-center">
          <NavBarActions>
            <Link href="/builder" passHref={true}>
              <StyledButton variant="text">Launch Editor</StyledButton>
            </Link>
          </NavBarActions>
        </div>
      </nav>
      <div
        className="relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0F1B2D 0%, #12263F 45%, #1C3A5B 100%)',
          fontFamily: "'Roboto Slab', serif",
        }}
      >
        <div className="absolute -top-24 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute top-20 right-6 h-48 w-48 rounded-full bg-sky-300/20 blur-3xl"></div>
        <div className="mx-6 md:mx-40 xl:mx-60 py-16 md:py-24">
          <motion.div
            className="grid grid-cols-12 items-center gap-8"
            initial={{ opacity: 0 }}
            animate={animationEffectsFirstLoad}
            transition={transitionEffects}
          >
            <div className="col-span-12 lg:col-span-6 text-white">
              <p className="text-sm uppercase tracking-[0.25em] text-sky-200 mb-4">
                College Project
              </p>
              <h1 className="text-5xl md:text-6xl font-semibold mb-6">
                Build a resume
                <span className="block text-sky-200">that stands out.</span>
              </h1>
              <p className="text-lg text-slate-100/90 mb-8">
                A fast, modern resume builder designed for placement season. Edit sections, preview
                live, and export a clean PDF in minutes.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link href="/builder" passHref={true}>
                  <Button variant="contained" className="bg-white text-resume-800">
                    Start Building
                  </Button>
                </Link>
                <span className="text-slate-200 text-sm">No login. No ads.</span>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6 flex justify-center lg:justify-end">
              <motion.img
                id="resume-3d"
                src="/resume.webp"
                alt="resume-3d"
                className="w-8/12 sm:w-7/12 lg:w-10/12 drop-shadow-2xl"
                onMouseEnter={() => {
                  controls.start(animationEffectsHoverEnter, transitionEffects);
                }}
                onMouseLeave={() => {
                  controls.start(animationEffectsHoverLeave, transitionEffects);
                }}
                animate={controls}
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="mx-6 md:mx-40 xl:mx-60 mt-12 mb-16"
        style={{ fontFamily: "'Roboto Slab', serif" }}
        initial={{ opacity: 0 }}
        animate={animationEffectsFirstLoad}
        transition={transitionEffects}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-resume-50 rounded-2xl p-6 shadow-level-4dp">
            <p className="text-resume-400 text-xs uppercase tracking-[0.2em] mb-2">Focus</p>
            <h3 className="text-resume-800 text-xl mb-2">Placement Ready</h3>
            <p className="text-resume-700">
              Clean sections to highlight internships, projects, and technical skills.
            </p>
          </div>
          <div className="bg-white border border-resume-50 rounded-2xl p-6 shadow-level-4dp">
            <p className="text-resume-400 text-xs uppercase tracking-[0.2em] mb-2">Speed</p>
            <h3 className="text-resume-800 text-xl mb-2">Edit in Seconds</h3>
            <p className="text-resume-700">
              Live preview with instant updates so you can iterate quickly.
            </p>
          </div>
          <div className="bg-white border border-resume-50 rounded-2xl p-6 shadow-level-4dp">
            <p className="text-resume-400 text-xs uppercase tracking-[0.2em] mb-2">Output</p>
            <h3 className="text-resume-800 text-xl mb-2">Print Friendly</h3>
            <p className="text-resume-700">
              Optimized layout with export-ready formatting for final submission.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="mx-6 md:mx-40 xl:mx-60 mt-24 mb-32"
        style={{ fontFamily: "'Roboto Slab', serif" }}
        initial={{ opacity: 0 }}
        animate={animationEffectsFirstLoad}
        transition={transitionEffects}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <FeatureSection />
        </div>
      </motion.div>

      <footer className="bg-resume-800 text-white">
        <div
          className="mx-6 md:mx-40 xl:mx-60 py-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
          style={{ fontFamily: "'Roboto Slab', serif" }}
        >
          <div>
            <p className="text-lg font-semibold">Campus Resume Studio</p>
            <p className="text-sm text-slate-200">
              A college project for quick, clean resume building.
            </p>
          </div>
          <div className="text-sm text-slate-200">
            © 2026 Campus Resume Studio. All rights reserved.
          </div>
        </div>
      </footer>
    </motion.div>
  );
};

export default HomeLayout;
