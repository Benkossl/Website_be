(function() {
	var translations = {};
	var pairs = [
		['Home', 'Startseite'], ['Technology', 'Technologie'], ['Products', 'Produkte'], ['About us', 'Über uns'], ['Contact', 'Kontakt'],
		['Powering a Wireless Future.', 'Eine kabellose Zukunft gestalten.'],
		['Energy independence through wireless power', 'Energieunabhängigkeit durch kabellose Energieübertragung'],
		['We help people to a sustainable and independent future through innovative wireless power solutions.', 'Wir helfen Menschen mit innovativen Lösungen für kabellose Energieübertragung in eine nachhaltige und unabhängige Zukunft.'],
		['Discover more', 'Mehr erfahren'], ['Solutions designed for sustainable growth', 'Lösungen für nachhaltiges Wachstum'],
		['Technology, strategy, and execution aligned to your business goals', 'Technologie, Strategie und Umsetzung im Einklang mit Ihren Geschäftszielen'],
		['We help companies modernize their processes, improve efficiency, and unlock new opportunities through practical digital solutions and a clear strategic focus.', 'Wir helfen Unternehmen, ihre Prozesse zu modernisieren, ihre Effizienz zu steigern und neue Chancen durch praktische digitale Lösungen und einen klaren strategischen Fokus zu nutzen.'],
		['Strategy', 'Strategie'], ['Digital', 'Digital'], ['Innovation', 'Innovation'], ['Systems', 'Systeme'],
		['What we deliver', 'Was wir liefern'], ['Wireless Power Devices', 'Geräte für kabellose Energieübertragung'],
		['Innovative solutions for seamless power delivery without the constraints of cables.', 'Innovative Lösungen für eine nahtlose Energieversorgung ohne die Einschränkungen von Kabeln.'],
		['Process Optimization', 'Prozessoptimierung'], ['Smarter workflows and improved systems designed for efficiency and scalability.', 'Intelligentere Arbeitsabläufe und verbesserte Systeme für Effizienz und Skalierbarkeit.'],
		['Automation', 'Automatisierung'], ['Reducing repetitive work and creating more time for strategic, value-driving tasks.', 'Wir reduzieren wiederkehrende Tätigkeiten und schaffen mehr Zeit für strategische Aufgaben mit echtem Mehrwert.'],
		['Long-term Growth', 'Langfristiges Wachstum'], ['Technology that supports sustainable success, adaptability, and competitive advantage.', 'Technologie für nachhaltigen Erfolg, Anpassungsfähigkeit und einen dauerhaften Wettbewerbsvorteil.'],
		['Explore solutions', 'Lösungen entdecken'], ['Talk to us', 'Sprechen Sie mit uns'],
		['Why companies choose us', 'Warum Unternehmen uns wählen'], ['Strategy built around real business needs', 'Strategie mit Fokus auf echte Geschäftsanforderungen'],
		['Practical solutions, measurable outcomes, and long-term value', 'Praktische Lösungen, messbare Ergebnisse und langfristiger Mehrwert'],
		['We work closely with businesses to understand their goals, constraints, and opportunities. From operational efficiency to digital innovation, we create solutions that are clear, scalable, and aligned with long-term business performance.', 'Wir arbeiten eng mit Unternehmen zusammen, um ihre Ziele, Rahmenbedingungen und Chancen zu verstehen. Von operativer Effizienz bis zu digitaler Innovation entwickeln wir klare, skalierbare Lösungen für langfristige Geschäftserfolge.'],
		['Learn about us', 'Mehr über uns'], ['Modern systems', 'Moderne Systeme'], ['Scalable offers', 'Skalierbare Angebote'], ['Start a conversation', 'Gespräch beginnen'],
		['About Besaval', 'Über Besaval'], ['Besaval helps organizations improve performance through modern technology, efficient systems, and a clear focus on sustainable business growth.', 'Besaval unterstützt Organisationen dabei, ihre Leistung mit moderner Technologie, effizienten Systemen und einem klaren Fokus auf nachhaltiges Wachstum zu verbessern.'],
		['Get in touch', 'Kontakt aufnehmen'], ['All rights reserved', 'Alle Rechte vorbehalten'],
		['Technology for the future', 'Technologie für die Zukunft'], ['Innovative solutions for intelligent businesses', 'Innovative Lösungen für intelligente Unternehmen'],
		['Modern technologies that deliver real results', 'Moderne Technologien, die echte Ergebnisse liefern'], ['We develop digital solutions that optimize processes, improve decisions, and make everyday work more efficient. We combine technological expertise with clear business goals and sustainable thinking.', 'Wir entwickeln digitale Lösungen, die Prozesse optimieren, Entscheidungen verbessern und Unternehmen in ihrer täglichen Arbeit effizienter machen. Dabei verbinden wir technologische Expertise mit klaren Geschäftszielen und nachhaltigem Denken.'],
		['Innovation focused on impact', 'Innovation mit Fokus auf Wirkung'], ['The targeted use of automation, data analysis, and modern systems creates scalable concepts that adapt to growing demands and deliver long-term benefits.', 'Durch den gezielten Einsatz von Automatisierung, Datenanalyse und modernen Systemen entstehen skalierbare Konzepte, die sich an wachsende Anforderungen anpassen und langfristige Vorteile schaffen.'],
		['Reliability, security, and growth', 'Verlässlichkeit, Sicherheit und Wachstum'], ['Our solutions are designed for stability, sensitive data protection, and sustainable development. They help companies act faster, work smarter, and remain competitive over the long term.', 'Unsere Lösungen sind auf Stabilität, Schutz sensibler Daten und nachhaltige Entwicklung ausgelegt. So unterstützen wir Unternehmen dabei, schneller zu handeln, intelligenter zu arbeiten und langfristig wettbewerbsfähig zu bleiben.'],
		['Our products', 'Unsere Produkte'], ['Flexible solutions for modern requirements', 'Flexible Lösungen für moderne Anforderungen'],
		['Modern solutions for everyday business', 'Moderne Lösungen für den echten Alltag'], ['Our product range is designed for companies that need greater efficiency, better workflows, and scalable digital processes. Every offering is developed with quality, usability, and sustainable impact in mind.', 'Unsere Produktpalette ist auf die Bedürfnisse von Unternehmen ausgerichtet, die mehr Effizienz, bessere Abläufe und skalierbare digitale Prozesse benötigen. Jedes Angebot wird mit Blick auf Qualität, Benutzerfreundlichkeit und nachhaltige Wirkung entwickelt.'],
		['The right offerings for different requirements', 'Passende Angebote für unterschiedliche Anforderungen'], ['From strategic solutions and digital tools to optimized systems for everyday operations, we help companies make their processes clearer, faster, and more resilient.', 'Von strategischen Lösungen und digitalen Werkzeugen bis hin zu optimierten Systemen für den operativen Alltag – wir unterstützen Unternehmen dabei, Prozesse klarer, schneller und robuster zu gestalten.'],
		['Who we are', 'Wer wir sind'], ['People, ideas, and sustainable solutions', 'Menschen, Ideen und nachhaltige Lösungen'], ['A company focused on impact', 'Ein Unternehmen mit Fokus auf Wirkung'], ['We develop solutions with clear goals, high quality, and a strong understanding of modern business requirements. We combine experience, technical expertise, and a practical view of the future.', 'Wir entwickeln Lösungen mit klaren Zielen, hoher Qualität und einem starken Verständnis für die Anforderungen moderner Unternehmen. Dabei verbinden wir Erfahrung, technisches Verständnis und einen praktischen Blick auf die Zukunft.'], ['What drives us', 'Was uns antreibt'], ['Our goal is to deliver projects reliably, personally, and with a focus on the future. Together with our customers, we create solutions that do more than work: they make a real difference in everyday business.', 'Unser Ziel ist es, Projekte zuverlässig, persönlich und zukunftsorientiert umzusetzen. Gemeinsam mit unseren Kunden schaffen wir Lösungen, die nicht nur funktionieren, sondern auch wirklich einen Unterschied im Alltag und im Geschäft machen.'],
		['We look forward to hearing from you', 'Wir freuen uns auf Ihre Anfrage'], ['How to reach us', 'So erreichen Sie uns'], ['Do you have questions about our solutions, would you like a quote, or would you like to learn more about our company? We would be happy to talk through your requirements.', 'Haben Sie Fragen zu unseren Lösungen, möchten Sie ein Angebot anfragen oder mehr über unser Unternehmen erfahren? Gerne nehmen wir Kontakt mit Ihnen auf und besprechen Ihre Anforderungen.'], ['Email: info@besaval.de', 'E-Mail: info@besaval.de'], ['Phone: +49 000 000000', 'Telefon: +49 000 000000'], ['Your message', 'Ihre Nachricht'], ['For specific projects, inquiries, or discussions about individual requirements, send us a message. We look forward to speaking with you and providing advice.', 'Für konkrete Projekte, Anfragen oder Gespräche zu individuellen Anforderungen senden Sie uns eine Nachricht. Wir freuen uns auf den Austausch und beraten Sie gern.']
	];

	pairs.forEach(function(pair) {
		translations[pair[0]] = { en: pair[0], de: pair[1] };
		translations[pair[1]] = { en: pair[0], de: pair[1] };
	});

	function normalize(value) {
		return value.replace(/\s+/g, ' ').trim();
	}

	function applyLanguage(language) {
		document.documentElement.lang = language;
		var pageTitles = {
			'index.html': { en: 'Besaval | Business Solutions', de: 'Besaval | Geschäftslösungen' },
			'Technology.html': { en: 'Technology | Besaval', de: 'Technologie | Besaval' },
			'Produkte.html': { en: 'Products | Besaval', de: 'Produkte | Besaval' },
			'Über uns.html': { en: 'About us | Besaval', de: 'Über uns | Besaval' },
			'Kontakt.html': { en: 'Contact | Besaval', de: 'Kontakt | Besaval' }
		};
		var page = location.pathname.split('/').pop() || 'index.html';
		if (pageTitles[page]) document.title = pageTitles[page][language];
		document.querySelectorAll('body *').forEach(function(element) {
			if (element.children.length > 0) return;
			var key = normalize(element.textContent);
			if (translations[key]) element.textContent = translations[key][language];
		});
		document.querySelectorAll('[data-language]').forEach(function(button) {
			button.classList.toggle('active', button.dataset.language === language);
			button.setAttribute('aria-pressed', button.dataset.language === language);
		});
		localStorage.setItem('besaval-language', language);
	}

	var language = localStorage.getItem('besaval-language') || document.documentElement.lang || 'de';
	document.querySelectorAll('[data-language]').forEach(function(button) {
		button.addEventListener('click', function() { applyLanguage(button.dataset.language); });
	});
	applyLanguage(language);
})();
