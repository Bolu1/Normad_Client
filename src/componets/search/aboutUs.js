import React from 'react'
import Nav from '../home/nav'
import Footer from '../home/footer'
import{ useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import {useDispatch} from 'react-redux'
import {findOne} from '../../actions/jobs'
import {useSelector} from 'react-redux'
import { useState } from 'react'
import Cookies from 'js-cookie'

const AboutUs = () => {
    

    return (
        <div>
            <Nav />
            <br/>
            <br/>
            {/* ------job type------- */}

            <>
            <section class="bg-dark text-light jobName d-flex">
                <div className="container d-sm-flex align-self-center justify-content-center">
                    <h1>About us</h1>
                </div>
            </section>
            <br/>
            <br/>
           
            <div class="container">
                <h3 class="text-center">Normad</h3>
                <br/>
                <p>
                jsx-a11y/anchor-has-content
  Line 275:29:  The href attribute requires a valid value to be accessible. Provide 
a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid
  Line 276:29:  Anchors must have content and the content must be accessible by a screen reader


                                   jsx-a11y/anchor-has-content
  Line 276:29:  The href attribute requires a valid value to be accessible. Provide 
a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid
  Line 277:29:  Anchors must have content and the content must be accessible by a screen reader


                                   jsx-a11y/anchor-has-content
  Line 277:29:  The href attribute requires a valid value to be accessible. Provide 
a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid
  Line 278:29:  Anchors must have content and the content must be accessible by a screen reader


                                   jsx-a11y/anchor-has-content
  Line 278:29:  The href attribute requires a valid value to be accessible. Provide 
a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid
  Line 289:29:  Anchors must have content and the content must be accessible by a screen reader


                                   jsx-a11y/anchor-has-content
  Line 289:29:  The href attribute requires a valid value to be accessible. Provide 
a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid
  Line 290:29:  Anchors must have content and the content must be accessible by a screen reader


                                   jsx-a11y/anchor-has-content
  Line 290:29:  The href attribute requires a valid value to be accessible. Provide 
a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid
  Line 291:29:  Anchors must have content and the content must be accessible by a screen reader


                                   jsx-a11y/anchor-has-content
  Line 291:29:  The href attribute requires a valid value to be accessible. Provide 
a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid
  Line 292:29:  Anchors must have content and the content must be accessible by a screen reader


                                   jsx-a11y/anchor-has-content
  Line 292:29:  The href attribute requires a valid value to be accessible. Provide 
a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid
  Line 303:29:  Anchors must have content and the content must be accessible by a screen reader





                </p>
             </div>

            </>
 
            <Footer />
        </div>
    )
}

export default AboutUs
