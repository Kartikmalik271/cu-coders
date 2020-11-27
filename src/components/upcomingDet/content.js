import React from 'react';

import eventimg from '../../assets/upcomingDet/img/eventimg.png'
import prop1 from '../../assets/upcomingDet/img/prop1.png'
import prop2 from '../../assets/upcomingDet/img/prop2.png'
import prop3 from '../../assets/upcomingDet/img/prop3.png'
import prop4 from '../../assets/upcomingDet/img/prop4.png'
import endtri from '../../assets/upcomingDet/img/endtri.png'
import profile1 from '../../assets/homepage/img/kartik.jpg'
import KnowMoreCard from './card';

const Content = () => {
    return (
     
    <div className="upcomingdetails-content pb-5" style={{overflowX:'hidden', msOverflowX:'hidden'}}>
        <div className="col-12 mt-5 px-0">
            <div className="row justify-content-center align-items-center">
                <div className="upcomingdetails-content-event col-8 col-md-3  mt-3 mt-md-5  order-last order-md-first">
                    <img className="upcomingdetails-content-eventimg col-12 px-0" src={eventimg} alt=""/>
                    <img className="upcomingdetails-content-eventimg-prop1 col-7"src={prop1} alt=""/>
                    <img className="upcomingdetails-content-eventimg-prop2 col-7"src={prop2} alt=""/>
                    <img className="upcomingdetails-content-eventimg-prop3 col-8"src={prop3} alt=""/>
                    <img className="upcomingdetails-content-eventimg-prop4 col-7"src={prop4} alt=""/>
                </div>
                <div className="col-12 col-md-5">
                    <h1>Event name</h1>
                    <p> In	other	words,	it	addresses	the	question:	What	if	the	given	recurrence	
                        doesn’t	seem	to	match	with any	of	these	(master	theorem)	methods?	
                        If	we	guess	a	solution	and	then	try	to	verify	our	guess inductively,	
                        usually	either	the	proof	will	succeed	(in	which	case	we	are	done),	or	
                        the	proof	will fail	(in	which	case	the	failure	will	help	us	refine	
                        our	guess). As	an	example,	consider	the	recurrence	.	This	doesn’t	fit	into	
                        the	form required	by
                    </p>
                </div>
                
            </div>
            <div className=" d-none d-md-block upcomingdetails-endtri px-0 col-12 mb-5 mt-5 px-0">
                    <img classname="px-0"src={endtri} alt=""/>
                </div>
            <div className="col-12 upcomingdetails-more-info mt-5 mt-md-2">
                    <div className="row justify-content-center">
                        <h1 className="col-12"style={{textAlign:'center'}}>Know More</h1>

                            <KnowMoreCard 
                                place="doesn’t	seem	to	match	with any	of	these	(master	theorem)	methods?	
                                        If	we	guess	a	solution	and	then	try	to	verify	our	guess inductively,	
                                        usually	either	the	proof	will	succeed	(in	which	case	we	are	done)"
                                profile={profile1}
                                name="kartik malik"
                                post="frontend"
                            />
                    </div>
                </div>
        </div>
    </div>
     );
}
 
export default Content;