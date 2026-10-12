import React, { createContext, useContext, useState, ReactNode } from 'react';
import { EvidenceItem, EVIDENCE_REGISTRY } from '../data/evidenceRegistry';

interface EvidenceLightboxContextType {
  activeEvidence: EvidenceItem | null;
  isOpen: boolean;
  openEvidence: (codeOrItem: string | EvidenceItem) => void;
  closeEvidence: () => void;
}

const EvidenceLightboxContext = createContext<EvidenceLightboxContextType | undefined>(undefined);

export const EvidenceLightboxProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeEvidence, setActiveEvidence] = useState<EvidenceItem | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const openEvidence = (codeOrItem: string | EvidenceItem) => {
    if (typeof codeOrItem === 'string') {
      const found = EVIDENCE_REGISTRY[codeOrItem];
      if (found) {
        setActiveEvidence(found);
        setIsOpen(true);
      }
    } else {
      setActiveEvidence(codeOrItem);
      setIsOpen(true);
    }
  };

  const closeEvidence = () => {
    setIsOpen(false);
    setActiveEvidence(null);
  };

  return (
    <EvidenceLightboxContext.Provider
      value={{
        activeEvidence,
        isOpen,
        openEvidence,
        closeEvidence,
      }}
    >
      {children}
    </EvidenceLightboxContext.Provider>
  );
};

const defaultContext: EvidenceLightboxContextType = {
  activeEvidence: null,
  isOpen: false,
  openEvidence: () => {},
  closeEvidence: () => {},
};

export function useEvidenceLightbox(): EvidenceLightboxContextType {
  const context = useContext(EvidenceLightboxContext);
  return context || defaultContext;
}
