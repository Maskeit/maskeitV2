import Github from '@/assets/icons/comp/Github';
import LinkedIn from '@/assets/icons/comp/Linkedin';
import Gmail from '@/assets/icons/comp/Gmail';

export const Contact = () => {
    const socialLogos = [
        {label : 'GitHub', url: 'https://github.com/Maskeit'},
        {label : 'LinkedIn', url: 'www.linkedin.com/in/miguel1170'},
        {label : 'Email', url: 'mailto:miguelalejandre182@gmail.com'},
    ];

    return (
        <section className="min-h-screen justify-center items-center flex flex-col px-4 pt-16">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-woodsmoke-900 via-woodsmoke-800 to-woodsmoke-700 bg-clip-text text-transparent animate-fade-in tracking-wide mb-6">Contact me</h1>
            <p className="text-lg md:text-xl text-woodsmoke-700 animate-fade-in-delay max-w-3xl mx-auto">Let's work together!</p>
            <div className="flex flex-col-md-row mt-8 space-y-4 md:space-y-0 md:space-x-6">
                {socialLogos.map((social) => (
                    <a 
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-woodsmoke-100 hover:bg-woodsmoke-200 rounded-lg transition-colors duration-200" 
                    >
                        {social.label === 'GitHub' && <Github className="w-8 h-8 text-woodsmoke-900" />}
                        {social.label === 'LinkedIn' && <LinkedIn className="w-8 h-8 text-woodsmoke-900" />}
                        {social.label === 'Email' && <Gmail className="w-8 h-8 text-woodsmoke-900" />}
                        <span className="text-woodsmoke-900 font-medium">{social.label}</span>
                    </a>
                ))}
            </div>
        </section>
    )
};