import { Social } from "../typings"

export const fetchSocials = async () => {
    const rest = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);

    const data = await rest.json()
    const socials: Social[] = data.socials;

    return socials;
}
