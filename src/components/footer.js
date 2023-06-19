import React from "react"
import { FooterContact, FooterImage, FooterSocial, FooterText, Social, StyledFooter, StyledIcons, Text } from "../styles/js/footer";
import { ImgFooter } from "./imagesComponets";
import { BehanceIcon, FacebookIcon, FiverrIcon, InstagramIcon, LinkedinIcon } from "../images/icons/icons";
import { colors } from "../utils/const";




const Footer = ({ siteTitle }) => {
    return (
        <>
            <StyledFooter>
                <FooterText>
                    <FooterContact>
                        <Text>
                            <h3>FOOTER_TITTLE</h3>
                            <p>FOOTER_DIRECTION</p>
                            <p>FOOTER_CITY</p>
                        </Text>
                        <Text>
                            <p>FOOTER_PHONE</p>
                            <p>FOOTER_MAIL</p>
                        </Text>
                    </FooterContact>
                    <FooterSocial>
                        <Social><a href="https://www.instagram.com/lduckystudio/" target="_blanck" color="white">Instagram</a></Social>
                        <Social><a href="https://www.facebook.com/lduckystudio" target="_blanck" color="white">Facebook</a></Social>
                        <Social><a href="https://www.linkedin.com/company/lduckystudio/" target="_blanck" color="white">LinkedIn</a></Social>
                        <Social><a href="https://es.fiverr.com/axeljovannyqt?up_rollout=true" target="_blanck" color="white">Fiverr</a></Social>
                        <Social><a href="https://www.behance.net/axeljovanny" target="_blanck" color="white">Behance</a></Social>

                    </FooterSocial>

                </FooterText>
                <FooterImage web>
                    <ImgFooter />
                </FooterImage>
                <FooterImage movil>
                    <ImgFooter />
                </FooterImage>
                <StyledIcons footer open>
                    <FacebookIcon fill={colors.white} className="svgAbout" />
                    <BehanceIcon fill={colors.white} className="svgAbout" />
                    <InstagramIcon fill={colors.white} className="svgAbout" />
                    <LinkedinIcon fill={colors.white} className="svgAbout" />
                    <FiverrIcon fill={colors.white} className="svgAbout" />
                </StyledIcons>
            </StyledFooter>
        </>
    )

}

export default Footer