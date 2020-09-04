/**
 * http://swagger.intra.cnaf/showSwagger.html?url=http://swagger.intra.cnaf/ui/services/developpement/back/mbc-0360.1001010.yaml 
 * /dossier/{organisme}_{numero_dossier}/base_tampon/enregistrement/SDP
 *
 *  A noter qu'une donnée alphanumérique non renseignée doit être initialisée à un espace, 
 *  tandis qu'une donnée numérique non renseignée doit être initialisée à un '0'.
 *  Dates au format AAAAMMJJ
 * 
 * 
 * code retour pssible :
 * 204 => ok pour mode liquidation automatique
 * 400 => requête mal formatée
 * 500 => Erreur interne
 * 
 */
export interface FluxSdp {
    // donnée technique standard dédiée à l'entête de la base tampon (code département CAF suivi du rang et d'un espace)
    num_organisme: number,                          // 4 caractères alphanumériques     Code organisme CAF                  Obligatoire
    
    num_dossier: number,                            // 7 caractères alphanumériques     Matricule dossier                   Obligatoire
    enregistrement_sdp: [  // json de la pièce sdp
        {
            enteteLiquidationAuto: {
                dateCreation: string,               // 8 caractères numériques          Date création ? date du jour        Obligatoire
                heureCreation: string,
                rangCreation: 0
            },
            partieCommuneLiquidationAuto: {
                dateTraitementPiece: string,        // 8 caractères numériques          Date de traitement ? ""             Facultatif
                heureTraitementPiece: string,
                codeOriginePiece: string,           // 5 caractères alphanumériques     Code origine pièce ? "60925"        Obligatoire
                codeBarre: string,                  // 20 caractères alphanumériques    Identifiant SDP ? code barre        Obligatoire
                codeCleMatricule: string,           
                codeUniteGestion: string            // 7 caractères alphanumériques     Code gestion ?                      Obligatoire
            },
            indicateurTypeLiquidation: string,      // 1 caractère alphanumérique       TOPLIQAUTOWEB ? "O" ou "N"          Obligatoire
            codeTypeDeFlux: string,                 // 3 caractères alphanumériques     Type de flux ? "ARR"                Obligatoire
            commentairePiece: string,               // 30 caractères alphanumériques    Commentaire ? ""                    Facultatif
            nomFluxInjection: string,               // 30 caractères alphanumériques    Nom flux d’injection  ? ""          Facultatif
            codeTypePiece: string,                  // 2 caractères alphanumériques     Code type de pièce ? ""             Facultatif
            identifiantPieceMaitresse: 0,           // 2 caractères numériques          Identifiant pièce maîtresse ? ""    Facultatif
            identifiantPieceAjoindre: string,       // 2 caractères numériques          Identifiant pièce à joindre         Facultatif
            numeroInternePersonne: string,          // 7 caractères alphanumériques     Code personne ? ""                  Facultatif
            codeApplicationEmettrice: string,       // 3 caractères numériques          Code émetteur pièce ? "WEB"         Obligatoire
            
            qualifieurRIDMois: 0,
            qualifieurRIDAnnee: 0,
            qualifieurRIDTrimestre: 0,
            qualifieurRIDCanal: string,
            qualifieurRIDMedia: string,
            qualifieurRIDOrigineFlux: string,
            qualifieurRIDDestinationFlux: string,
            qualifieurRIDCodeVentilation: string
        }
    ]
}