import Linkedin from '../assets/linkedin.png';
import Twitter from '../assets/twitter.png';
import Facebook from '../assets/facebook.png';
import Instagram from '../assets/instagram.png';

const SocialMediaIcons = () => {
	return (
		<div className="flex justify-center md:justify-start my-10 gap-7">
			<a 
				href="https://www.linkedin.com" 
				className="hover:opacity-50 transition duration-500" 
				target="_blank"
				rel="noreferrer"
			>
				<img src={Linkedin} />
			</a>
			<a 
				href="https://www.twitter.com" 
				className="hover:opacity-50 transition duration-500" 
				target="_blank"
				rel="noreferrer"
			>
				<img src={Twitter} />
			</a>
			<a 
				href="https://www.facebook.com" 
				className="hover:opacity-50 transition duration-500" 
				target="_blank"
				rel="noreferrer"
			>
				<img src={Facebook} />
			</a>
			<a 
				href="https://www.instagram.com" 
				className="hover:opacity-50 transition duration-500" 
				target="_blank"
				rel="noreferrer"
			>
				<img src={Instagram} />
			</a>
		</div>
	)
}

export default SocialMediaIcons;