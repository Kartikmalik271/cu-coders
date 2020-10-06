import React from 'react';
import ClubsModal from './Modal';
import YouTube from 'react-youtube';

const JoinClubs = () => {
    const opts = {
        

        playerVars: {
         
          autoplay: 0,
        },
      };
     
    return ( 
        <div className="joinclubs col-12 mt-5">
            <div className="row">
                <div className=" col-11 col-md-6 offset-md-1 ">
                    <h1>Clubs</h1>
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
                    <ClubsModal/>
                </div>
                <div className="col-12 col-md-5 mt-3">
                <YouTube className="col-12" videoId="2g811Eo7K8U" opts={opts}  />
                </div>
            </div>
        </div>
     );
    
}
 
export default JoinClubs;