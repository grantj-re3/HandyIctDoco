# Security jargon

1. Glossaries / encyclopedias
   - [Kaspersky IT Encyclopedia | Glossary](https://encyclopedia.kaspersky.com/glossary/)
   - [PCMag Encyclopedia](https://www.pcmag.com/encyclopedia)
   - [Surveillance Self-Defense | Glossary](https://ssd.eff.org/glossary)
   - [CyberGhost | Cybersecurity glossary](https://www.cyberghostvpn.com/glossary)


1. End-to-end encryption (E2EE)
   - Summary:
     * Used for email, messaging apps, cloud storage, VPNs, etc.
     * Vulnerable areas may exist at end points, back doors or where users are careless.
     * For most implementations, loss of your private key means you can no longer decrypt your emails/messages.
   - [TechTarget: Ben Lutkevich, Madelyn Bacon | End-to-end encryption (E2EE) | 2021](https://www.techtarget.com/searchsecurity/definition/end-to-end-encryption-E2EE)
   - [Cloudflare | What is end-to-end encryption (E2EE)?](https://www.cloudflare.com/learning/privacy/what-is-end-to-end-encryption/)
   - [Proton: Marco Martinoli | What is end-to-end encryption and how does it work? | 2022-2023](https://proton.me/blog/what-is-end-to-end-encryption)
     * [How to use PGP with Proton Mail](https://proton.me/support/how-to-use-pgp)
   - [Mozilla: Kai Engert, et al. | Introduction to End-to-end encryption in Thunderbird | c.2021](https://support.mozilla.org/en-US/kb/introduction-to-e2e-encryption)
   - Back door discussion:
     * [Computer Weekly: Andersen Cheng | Opinion: Why we need a secure side door for encrypted apps, not a back door | 2023](https://www.computerweekly.com/opinion/Why-we-need-a-secure-side-door-for-encrypted-apps-not-a-back-door)
       + I believe government-sanctioned backdoors in encryption will
         increase the possibility that anyone can walk through it, whether
         it’s the intended government agency, a malicious nation or hackers.
       + The answer is very simple, the key should not be held by such
         companies and the key guardians should not have access to the data
         unless a legal and out-of-band process is performed.
       + It works by splitting a decryption key into multiple fragments that
         are then transmitted to fragment guardians... The message can only
         be accessed if a pre-agreed quorum threshold is reached... for
         example, 3 out of 5 fragment guardians will need to approve the
         request before access to the data is granted.
     * [Techdirt: Tim Cushing | Cybersecurity Official Believes Encryption Can Be Backdoored Safely; Can't Think Of Single Expert Who Agrees With Him | 2015](https://www.techdirt.com/2015/04/23/cybersecurity-official-believes-encryption-can-be-backdoored-safely-cant-think-single-expert-who-agrees-with-him/)
       + No one who knows anything about encryption will ever say it’s possible to create a “good guys only” backdoor.

1. Zero-access encryption / Zero-knowledge encryption
   - [Proton: Ben Wolford | What is zero-access encryption and why is it important for security? | 2018-2024](https://proton.me/blog/zero-access-encryption)
   - [PCMag | zero-access encryption](https://www.pcmag.com/encyclopedia/term/zero-access-encryption)
   - [Zivver | What is zero-access encryption and why is it superior to end-to-end encryption? | 2023](https://www.zivver.com/blog/what-is-zero-access-encryption-and-why-is-it-superior-to-end-to-end-encryption)

1. Perfect Forward Secrecy (PFS)
   - [Avi Networks | Perfect Forward Secrecy Definition & FAQs | 2017](https://avinetworks.com/glossary/perfect-forward-secrecy/)
   - [Encryption Consulting | All you need to know about Perfect Forward Secrecy | 2024](https://www.encryptionconsulting.com/all-you-need-to-know-about-perfect-forward-secrecy/)

