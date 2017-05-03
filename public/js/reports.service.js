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
				},
				{
					articleTitle: 'Project Repository',
					articleAuthors: '',
					articleSource: '',
					reviewDate: new Date(2017, 4, 2),
					articleURL: 'https://github.com/robfitzgerald/csci5593-project',
					download: 'reviews/csci5593-project-master.zip',
					description: 'Open MPI Profiling App Repository'
				},
				{
					articleTitle: 'Final Report',
					articleAuthors: 'Nathan Justice, Matthew Kalan, Rob Fitzgerald',
					articleSource: 'CSCI-5593',
					reviewDate: new Date(2017, 4, 2),
					articleURL: '',
					download: 'reviews/MappingHeraclesCommunicationNetworkDataandAnalysis.docx',
					description: 'Experimental Results'
				},
				{
					articleTitle: 'Research Presentation',
					articleAuthors: 'Nathan Justice, Matthew Kalan, Rob Fitzgerald',
					articleSource: 'CSCI-5593',
					reviewDate: new Date(2017, 3, 27),
					articleURL: '',
					download: 'reviews/Team_8_presentation-Mapping_Heracles_Communication-.pptx',
					description: 'Presentation of project concept and tentative implementation plan'
				},
				{
					articleTitle: 'Project Presentation',
					articleAuthors: 'Nathan Justice, Matthew Kalan, Rob Fitzgerald',
					articleSource: 'CSCI-5593',
					reviewDate: new Date(2017, 4, 2),
					articleURL: '',
					download: 'reviews/Team_8-Mapping_Heracles_Implementation.pptx',
					description: 'Demonstration of initial experimental results'
				}					
			]
		}
	}
}