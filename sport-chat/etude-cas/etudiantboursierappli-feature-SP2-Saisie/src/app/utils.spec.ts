export class UtilsTest {

    public static initMapForAngularAppli(): void {
        let mapForAngularAppli: any;
        mapForAngularAppli = {};
        mapForAngularAppli.userConfig = {
            codeOrga: '456',
            matricule: '46',
            dateEnvCaffr: 'dateenv',
            listGroups: ['groupe1'],
            CNAF_LIST_GROUP: { GROUPE_1: 'groupe1', GROUPE_2: 'groupe2' }
        };
        mapForAngularAppli.espace = 'usager';
        // tslint:disable-next-line: no-string-literal
        window['mapForAngularAppli'] = mapForAngularAppli;

        // Mock PageReady
        // tslint:disable-next-line: no-string-literal
        window['pageReady'] =  () => { };

        // Mock PageReadyForTheme
        // tslint:disable-next-line: no-string-literal
        window['pageReadyForTheme'] = () => { };
    }
}
