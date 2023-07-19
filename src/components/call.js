import React from "react";
import {
  SCall,
  SCallButtom,
  SCallFrase,
  STextGuarantee,
} from "../styles/js/call";
import { Trans } from "gatsby-plugin-react-i18next";
import { motion } from "framer-motion";

const Call = ({ siteTitle }) => {
  return (
    <SCall>
      <SCallFrase>
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <span>
            <Trans i18nKey="CALL_SUB_CTA" />
          </span>
        </motion.h3>
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Trans i18nKey="CALL_CTA" />
        </motion.h1>
      </SCallFrase>
      <SCallButtom
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.9, ease: "easeInOut", type: "spring" }}
      >
        <motion.a
          href="https://wa.me/5214181119941"
          rel="noreferrer"
          target="_blank"
        >
          <Trans i18nKey="CALL_CONTACT" />
        </motion.a>
      </SCallButtom>
      <STextGuarantee>
        <span>
          <Trans i18nKey="CALL_GUARANTEE"></Trans>
        </span>
      </STextGuarantee>
    </SCall>
  );
};

export default Call;
