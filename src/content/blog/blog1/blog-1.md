---
slug: /blog/a-case-for-password-managers
date: 2020-10-18
title: A case for password managers (while passwords exist)
featuredImage: featuredImage.jpg
contentType: blog
author: Jason Upchurch
---
*Source of featured image: [unsplash.com](https://unsplash.com/photos/I_pOqP6kCOI)*

Right off the top, you should know that I'm not a cybersecurity expert, and this post is by no means a definitive nor a comprehensive guide to protecting yourself. But **security affects us all**, and while password authentication is in use, adequately securing your passwords is an essential step to protecting yourself.

### Frogs in winter
On December 13, 1985, I was introduced to the concept of password cracking by the highly toyetic cartoon series *G.I. Joe*. And nearly 35 years later, here it is, trimmed to the 35 seconds most relevant to setting up the rest of this post:
<iframe width="800" height="450" src="https://www.youtube.com/embed/GZB_VKM7Zpo?start=687&end=719" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

*Source: [There's no place like Springfield: Pt 2](https://www.youtube.com/watch?v=GZB_VKM7Zpo)*

The method Tomax and Xamot used in this episode was a _dictionary attack_ (in this case, a literal dictionary). As it turns out, the password was *frogs in winter*, a special case of a [diceware passphrase](https://en.wikipedia.org/wiki/Diceware) that reads as a sentence fragment.

Even *G.I. Joe* knew that `password1` was a bad password. And knowing is half the battle<sup>&reg;</sup>!<sup>1</sup>

### Cracking the code
Would their method have worked?   Let's assume there's a reason why these words needed to be read at a rate of approximately one per second. And let's assume that when the computer reached the end of the dictionary, Tomax and Xamot decided to permute with replacement, so at the second pass, they might try things like *aardvark, aardvark*, and later, *aardvark, banana*, and even later, *banana, aardvark*.

Assuming this permutation-with-replacement approach, the number of candidate guesses would be $\sum_{\substack{r=1,k}}n^{r}$, where $n$ is the number of words in the dictionary, $r$ is the number of words selected to make up the passphrase, and $k$ is the upper bound on the number of words in our passphrase. So, in our example, $k=3$, since the passphrase contained three words.

The First Edition Oxford English Dictionary---the one in publication at the time this episode aired---defined [414,800 word forms](https://public.oed.com/history/oed-editions/), so the total number of brute-force guesses comes to 71,370,261,851,454,800.<sup>2</sup> At a rate of one guess per second, that's an upper bound of 2,263,136,157 years of guessing. Sorry Cobra Commander! Hssss.<sup>3</sup>

This example is a pretty special case---the password needed to be spoken. Processor speeds have increased significantly since 1985, and so has password cracking. For a really cool and eye-opening video on password cracking by dictionary attacks, check out this [Computerfile explanation](https://www.youtube.com/watch?v=7U-RbOKanYs). It may motivate readers to take stock in their approach to password management.

### Schm@55w3rdz!
I believe this xkcd comic sums up the present-day dominant thinking on passwords.
![cloud image](https://imgs.xkcd.com/comics/password_strength.png )
*Source: [xkcd](https://xkcd.com/936/)*

But to what degree does this approach improve password security? It certainly looks like a brute-force attack would take much longer, although I supsect that the literal password *correcthorsebatterystaple* is guessed rather quickly since the comic came out.

Blogger unix-ninja also addressed some [underlying flaws](https://www.unix-ninja.com/p/your_xkcd_passwords_are_pwned) with this particular xkcd comic in December 2019:

>[I]f a person is picking these words in their head they are relying on their cognitive facilities to fill in the blanks. This creates a surface area of predictability an attacker can leverage, and that's going to weaken the password. So suggesting diceware is great, but it should also come with a recommendation of how that pattern should be selected (and that should not simply be "thinking of the words.")

I agree with this critique in that the words did not seem to be truly random. The example revealed a strong preference for English-language nouns, and the remaining word---an adjective---modifies one of the nouns. And the guidance for "common words" would narrow a dictionary considerably. A potential counterargument to the critque itself is that if recommendations become too specific, then the generation methods also become candidates for dictionary generation. 

Now, with the emphasis on memorability in the passphrase approach, let me ask: *how many sets of four random words are mentally maintainable at any given time?* And what about remembering the mapping of those unique passphrases to each of their unique target applications? Is that the model use case of the memorable passphrase?

No matter what your password generation method or philosophy, memorizing them all can be hard. Enter password managers.

### &bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull; managers

In the [Digital Identity Guidelines](https://pages.nist.gov/800-63-FAQ/#q-b12), the National Institute of Standards and Technology (NIST) has this to say about password managers:

>Password managers offer greater security and convenience for the use of passwords to access online services... Greater convenience is provided by the use of a single master password to access the password vault rather than attempting to memorize different passwords for all accounts.
>
>[However] the compromise of the master secret to a password vault would require all passwords in the vault to be recreated... Password managers contain much information that is valuable to cyber criminals, making them high-value targets, so securing these vaults is essential.

NIST also suggests:
<ul>
<li>Choosing a long passphrase for the master password to the password manager</li>
<li>Creating unique passwords for all accounts or using the capability of most program managers to generate random, unique, complex passwords for each account (do not reuse passwords)</li>
<li>Avoiding password managers that allow recovery of the master password</li>
<li>Using multi-factor authentication for program manager applications that allow that capability</li>
<li>Using the password generator capability in most password managers to generate complex, random text answers to online “security” questions for those sites still using them (this is a particularly good approach to sites asking you things like, "What's your mother's maiden name?")</li>

But also be aware that password generators have been known to contain vulnerabilities [\[1\]](https://github.com/IJHack/QtPass/issues/338)[\[2\]](https://github.com/passbolt/passbolt_help/blob/b19064ea45a0fadc0eae4804c4acbf9db007c6f4/_includes/releases/v205.md)[\[3\]](https://www.cvedetails.com/cve/CVE-2013-4442/). It's a good idea to monitor your password manager for any security updates and run them as they are made available.
</ul>

### Finding a password manager

There are many quality free and paid password management systems available. Just search "password manager \<operating system\>" and you'll find a number of articles comparing these tools. Many tools also allow passwords to be kept synchronized between devices.

### A parting question
Would you like the option to have any of your password-authenticated accounts automatically disabled upon "too many" failed login attempts? 

---
1. _KNOWING IS HALF THE BATTLE_ is a [registered trademark](https://uspto.report/TM/87364420) of Hasbro, Inc.
2. Let's just ignore the annoying cases of things like *a, a* (two articles in a row) and *aa* (the lava flow).
3. *Frogs in winter* is still strongly discouraged as a passphrase.