import GmailSvg from '../../../public/skills/Gmail.svg';
import GithubSvg from '../../../public/skills/Github.svg';
import LinkedinSvg from '../../../public/skills/Linkedin.svg';

export const Contact = () => {
    const socialLogos = [
        { label: 'GitHub', url: 'https://github.com/Maskeit', icon: GithubSvg },
        { label: 'LinkedIn', url: 'www.linkedin.com/in/miguel1170', icon: LinkedinSvg },
        { label: 'Email', url: 'mailto:miguelalejandre182@gmail.com', icon: GmailSvg },
    ];

    return (
        <section className="min-h-screen justify-center items-center flex flex-col px-4 pt-16" id='contact'>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-woodsmoke-900 via-woodsmoke-800 to-woodsmoke-700 bg-clip-text text-transparent animate-fade-in tracking-wide mb-6">Contact me</h1>
            <p className="text-lg md:text-xl text-woodsmoke-700 animate-fade-in-delay max-w-3xl mx-auto">Let's work together!</p>
            <div className="flex flex-col md:flex-row mt-8 gap-4 md:gap-6 justify-center">
                {socialLogos.map((social) => (
                    <a
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-2 px-6 py-3 w-full md:w-40 bg-woodsmoke-100 hover:bg-woodsmoke-200 rounded-lg transition-colors duration-200"
                    >
                        <img src={social.icon} alt={social.label} className="w-8 h-8" />
                        <span className="text-woodsmoke-900 font-medium">{social.label}</span>
                    </a>
                ))}
            </div>
        </section>
    )
};
