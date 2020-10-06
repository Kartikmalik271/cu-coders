import React from 'react';

import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';

const AboutUs = () => {
    return ( 
        <div className=" aboutus col-12 mt-4">
            <div className="container aboutus-container">
            <div className="row justify-content-center align-items-center">
              
              <div className="counter-circle col-10 col-md-3">
                   <h6 ><CountUp start={0} end={9} duration={4} suffix="" redraw={false}>
                           {({ countUpRef, start }) => (
                               <VisibilitySensor onChange={start} delayedCall>
                                   <span ref={countUpRef} />
                               </VisibilitySensor>
                           )}
                       </CountUp>
                       <br/>
                      CLUBS
                   </h6>
                   
                   <h6><CountUp start={0} end={1000} duration={4} suffix="+" redraw={true}>
                           {({ countUpRef, start }) => (
                               <VisibilitySensor onChange={start} delayedCall>
                                   <span ref={countUpRef} />
                               </VisibilitySensor>
                           )}
                       </CountUp>
                       <br/>
                       MEMBERS
                   </h6>
                   <h6><CountUp start={0} end={100} duration={4} suffix="+" redraw={true}>
                           {({ countUpRef, start }) => (
                               <VisibilitySensor onChange={start} delayedCall>
                                   <span ref={countUpRef} />
                               </VisibilitySensor>
                           )}
                       </CountUp>
                       <br/>
                       MENTORS
                   </h6>
                   <h6><CountUp start={0} end={1000} duration={4} suffix="+" redraw={true}>
                           {({ countUpRef, start }) => (
                               <VisibilitySensor onChange={start} delayedCall>
                                   <span ref={countUpRef} />
                               </VisibilitySensor>
                           )}
                       </CountUp>
                       <br/>
                       EVENTS
                   </h6>
              </div>
              <div className="aboutus-content col-12 col-md-8">
                  
                       <h1>About Us<br/></h1>
                       
                       <p>In	other	words,	it	addresses	the	question:	What	if	the	given	recurrence	doesn’t	seem	to
                               match	with any	of	these	(master	theorem)	methods?	If	we	guess	a	solution	and	then
                                   try	to	verify	our	guess inductively,	usually	either	the	proof	will	succeed	(in	which	case
                                       we	are	done),	or	the	proof	will fail	(in	which	case	the	failure	will	help	us	
                                       refine	our	guess).
                               As	an	example,	consider	the	recurrence	.	This	doesn’t	fit	into	the	form required	by
                                   the	Master	Theorems.	Carefully	observing	the	recurrence	gives	us	the	impression	that
                                    it	is	similar	to	the	divide	and	conquer	method	(dividing	the	problem	into		subproblems
                                        each with	size	).	As	we	can	see,	the	size	of	the	subproblems	at	the	first	level
                                            of	recursion	is	n.	So, let	us	guess	that	T(n)	=	O(nlogn),	and	then	try	to
                                                prove	that	our	guess	is	correct.
</p>
                        <h2>Why Us<br/></h2>
                       <p>In	other	words,	it	addresses	the	question:	What	if	the	given	recurrence	doesn’t	seem	to
                               match	with any	of	these	(master	theorem)	methods?	If	we	guess	a	solution	and	then
                                   try	to	verify	our	guess inductively,	usually	either	the	proof	will	succeed	(in	which	case
                                       we	are	done),	or	the	proof	will fail	(in	which	case	the	failure	will	help	us	
                                       refine	our	guess).
                               As	an	example,	consider	the	recurrence	.	This	doesn’t	fit	into	the	form required	by
                                   the	Master	Theorems.	Carefully	observing	the	recurrence	gives	us	the	impression	that
                                    it	is	similar	to	the	divide	and	conquer	method	(dividing	the	problem	into		subproblems
                                        each with	size	).	As	we	can	see,	the	size	of	the	subproblems	at	the	first	level
                                            of	recursion	is	n.	So, let	us	guess	that	T(n)	=	O(nlogn),	and	then	try	to
                                                prove	that	our	guess	is	correct.</p>
                   </div>
               
           </div> 
            </div>
        </div>
     );
}
 
export default AboutUs;