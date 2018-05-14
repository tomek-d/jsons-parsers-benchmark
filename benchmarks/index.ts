import { Suite } from 'benchmark';
import { parse as vsCodeParse } from './parsers/vscode/json';
import { parse as jsonBigIntParse } from 'json-bigint';
import { parse as jsonBigNumParse } from 'json-bignum';

const testEasy1 = JSON.stringify( require( './test-data/test_easy1.json' ), null, 2 );

const suite = new Suite();

suite
    .add( 'Native parse - easy1', function () {
        JSON.parse( testEasy1 );
    } )
    .add( 'VSCode parse - easy1', function () {
        vsCodeParse( testEasy1 );
    } )
    .add( 'json-bigint parrse - easy1', function () {
        jsonBigIntParse( testEasy1 );
    } )
    .add( 'json-bignum parse - easy1', function () {
        jsonBigNumParse( testEasy1 );
    } )
    .on( 'cycle', ( evt ) => {
        console.log( String( evt.target ) );
    } )
    // .on( 'complete', function () { console.log( this ); } )
    .run( {
        async: false,
        initCount: 100,
    } );