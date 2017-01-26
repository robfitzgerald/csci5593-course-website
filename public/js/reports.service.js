// reports.js
'use strict';
{
	angular
		.module('ArchitectureSite')
		.factory('ReportsService', reportsService)

	function reportsService () {
		return {
			getReports: () => { return reports() }
		}

		function reports () {
			return [
				{
					articleTitle: 'Lit Review: Reimagining Heterogeneous Computing: a Functional Instruction Set Architecture (F-ISA) Computing Model',
					articleAuthors: 'Daniel Nemirovsky, Nikola Markovic, Osman Unsal, Mateo Valero, Adrian Cristal',
					articleSource: 'IEEE Micro',
					reviewDate: new Date(2017, 0, 26),
					articleURL: 'http://ieeexplore.ieee.org/abstract/document/7325210/',
					download: 'reviews/robfitzgerald-review-01.pdf',
					description: 'Proposing a new ISA for Heterogeneous Computing architectures.'
				}
			]
		}
	}
}