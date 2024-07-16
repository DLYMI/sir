"use client"

import Script from 'next/script';
import { useEffect } from 'react';

const PendoTracking = ({ session }) => {
	const emailAddress = session?.user?.email ? session.user.email : null;
	const name = session?.user?.name ? session.user.name : null;
	const userId = session?.user?.id ? session.user.id : null;

	useEffect(() => {
		if (typeof window !== 'undefined') {
			<Script
				id="pendo-script"
				dangerouslySetInnerHTML={{
					__html: `
						(function(apiKey){
								(function(p,e,n,d,o){var v,w,x,y,z;o=p[d]=p[d]||{};o._q=o._q||[];
								v=['initialize','identify','updateOptions','pageLoad','track'];for(w=0,x=v.length;w<x;++w)(function(m){
										o[m]=o[m]||function(){o._q[m===v[0]?'unshift':'push']([m].concat([].slice.call(arguments,0)));};})(v[w]);
										y=e.createElement(n);y.async=!0;y.src='https://cdn.pendo.io/agent/static/'+apiKey+'/pendo.js';
										z=e.getElementsByTagName(n)[0];z.parentNode.insertBefore(y,z);})(window,document,'script','pendo');

								pendo.initialize({
										visitor: {
												id: ${userId},
												email: ${emailAddress},
												firstName: ${name},
										},

										account: {
												id: ${process.env.PENDO_ACCOUNT_ID},
												accountName: "SIR Digital Hub",
										}
								});
						})(${process.env.PENDO_API_KEY});`,
				}}
			/>
		}
	}, [name, userId, emailAddress])


	return null;
};

export default PendoTracking;