import React, { useEffect } from 'react'
import $ from 'jquery'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import './App.css';
import Contact from './pages/Contact';
import About from './pages/About';
import Portfolios from './pages/Portfolios';
import Service from './pages/Service';
import Gallery from './pages/Gallery';
import Career from './pages/Career';
import CareerSinglePython from './pages/career-single/CareerSinglePython';
import CareerSingleUIUX from './pages/career-single/CareerSingleUIUX';
import CareerSingleKotlin from './pages/career-single/CareerSingleKotlin';
import CareerSingleFlutter from './pages/career-single/CareerSingleFlutter';
import CareerSingleSEO from './pages/career-single/CareerSingleSEO';
import CareerSingleJava from './pages/career-single/CareerSingleJava';
import CareerSingleMernStack from './pages/career-single/CareerSingleMernStack';
import CareerSingleContentWriter from './pages/career-single/CareerSingleContentWriter';
import CareerSingleWPPlugin from './pages/career-single/CareerSingleWPPlugin';

import MessengerChat from './chat/MessengerChat';
import WhatsAppChat from './chat/WhatsAppChat';
import Blog from './pages/blog/Blog'
import BlogSingle from './pages/blog-single/BlogSingle'
import Courses from './pages/Courses';
// import WorkSingle from './pages/WorkSingle';

function App() {


  const modeBtn = () => {
    $("body").toggleClass("dark-mode");
  }

  const hours = new Date().getHours();
  if(hours > 18 || hours < 7){
      $("body").addClass("dark-mode");
  }else{
      $("body").removeClass("dark-mode");
  }

  useEffect(function() {
    var $animation_elements = $('.animate-from-bottom');
    var $window = $(window);

    function check_if_in_view() {
        var window_height = $window.height() / 1.3;
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);
        $.each($animation_elements, function () {
            var $element = $(this);
            var element_top_position = $element.offset().top;
            if (element_top_position <= window_bottom_position) {
                $element.addClass('in-view');
            } else {}
        });
    }
    $window.on('scroll resize',check_if_in_view);$window.trigger('scroll');
  });

  return (
    <>
    <Header/>
    <Routes>
      <Route exact path='/' element={< Home />}></Route>
      <Route exact path='/blog' element={< Blog />}></Route>
      <Route exact path='/contact' element={< Contact />}></Route>

      <Route exact path='/about' element={< About />}></Route>
      <Route exact path='/portfolio' element={< Portfolios />}></Route>
      <Route exact path='/service' element={< Service />}></Route>
      <Route exact path='/gallery' element={< Gallery />}></Route>
      <Route exact path='/career' element={< Career />}></Route>
      <Route exact path='/career/python' element={< CareerSinglePython />}></Route>
      <Route exact path='/career/wordpress-plugin-developer' element={< CareerSingleWPPlugin />}></Route>
      <Route exact path='/career/content-writer' element={< CareerSingleContentWriter />}></Route>
      <Route exact path='/career/mernstack-developer' element={< CareerSingleMernStack />}></Route>
      <Route exact path='/career/seo-expert' element={< CareerSingleSEO />}></Route>
      <Route exact path='/career/java-developer' element={< CareerSingleJava />}></Route>
      <Route exact path='/career/flutter-developer' element={< CareerSingleFlutter />}></Route>
      <Route exact path='/career/kotlin-developer' element={< CareerSingleKotlin />}></Route>
      <Route exact path='/career/ui-ux-designer' element={< CareerSingleUIUX />}></Route>

      <Route exact path='/blog/' element={< Blog />}></Route>
      <Route exact path='/blog/:id' element={< BlogSingle />}></Route>
      <Route exact path='/Courses' element={< Courses />}></Route>
        
    </Routes>
    <Footer/>
      <div className="mode-btn" onClick={modeBtn}>
            <div></div>
      </div>
    <MessengerChat/>
    <WhatsAppChat/>
    
    </>
  );
}

export default App;