export interface InformationsDossier {
    eligible: boolean,
    responsable: {
        qualite: string,
        nom: string,
        prenom: string
    },
    conjoint: {
        qualite: string,
        nom: string,
        prenom: string
    },
    _isResponsableEBO: boolean,
    _isCoupleEBO: boolean,
    _isConjointEBO: boolean
}