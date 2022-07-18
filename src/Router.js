import React, {Suspense, lazy,} from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./component/layoutscreen/layout";

const LandingRoot = lazy(()=> import('./pages/landing/Landing'));
const AboutRoot = lazy(() => import('./pages/about/about'));
const BlogRoot = lazy(() => import('./pages/blog/blog'));
const GithubRoot = lazy(() => import('./pages/github/github'));

const Router = () => {
  return (
    <div>
        <Suspense fallback={<Layout/>}>
          <Routes>
            <Route exact path="/" element={<Navigate to='/comingsoon'/>} />
            <Route exact path="/comingsoon" element={<LandingRoot/>} />
            <Route path="/about" element={<AboutRoot/>} />
            <Route path="/blog" element={<BlogRoot/>} />
            <Route path="/github" element={<GithubRoot/>} />
          </Routes>
        </Suspense>
    </div>
  )
}

export default Router