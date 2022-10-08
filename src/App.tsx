import React from 'react';
import './App.css';
import { SheetDirective, SheetsDirective, SpreadsheetComponent, ColumnsDirective, ColumnDirective, 
    RangeDirective, RangesDirective, getFormatFromType, RowsDirective, RowDirective, CellsDirective, CellDirective} 
    from '@syncfusion/ej2-react-spreadsheet';
import {protectSheetData} from './data';
function App() {
  let ssObj: SpreadsheetComponent;
  let protectOptions: object = {
    selectCells: true
  }  
  const onCreated=()=>{
    // Formatting cells dynamically using cellFormat method
    ssObj.cellFormat({ backgroundColor: '#e56590', color: '#fff', fontWeight: 'bold', textAlign: 'center' }, 'B1');
    ssObj.protectSheet(1, {selectCells:true}, "Syncfusion");
    // ssObj.unprotectSheet(0);
    ssObj.lockCells("B1:C9", false);
  }
  return (
    <div className="App">
      <SpreadsheetComponent ref={((s:SpreadsheetComponent)=>ssObj=s)} isProtected={true} password="Syncfusion"
        height={560}  created={onCreated}>
        <SheetsDirective>
            <SheetDirective name='EMI Calculator'> {/* protectSettings={protectOptions} */}
              <RowsDirective>
                  <RowDirective>
                      <CellsDirective>
                          <CellDirective index={1} value='Home Loan Calculator' colSpan={2}></CellDirective>
                      </CellsDirective>
                  </RowDirective>
                  <RowDirective>
                      <CellsDirective>
                          <CellDirective index={1} value='Loan Amount:'></CellDirective>
                          <CellDirective value='100000' format={getFormatFromType('Currency')} ></CellDirective>
                      </CellsDirective>
                  </RowDirective>
                  <RowDirective>
                      <CellsDirective>
                          <CellDirective index={1} value='Interest Rate:'></CellDirective>
                          <CellDirective value='0.08' format={getFormatFromType('Percentage')}></CellDirective>
                      </CellsDirective>
                  </RowDirective>
                  <RowDirective>
                      <CellsDirective>
                          <CellDirective index={1} value='Periods (terms in year):'></CellDirective>
                          <CellDirective value='1'></CellDirective>
                      </CellsDirective>
                  </RowDirective>
                  <RowDirective>
                      <CellsDirective>
                          <CellDirective index={1} value='Start Date:'></CellDirective>
                          <CellDirective value='03-03-2020'></CellDirective>
                      </CellsDirective>
                  </RowDirective>
                  <RowDirective>
                      <CellsDirective>
                          <CellDirective index={1} value='Loan EMI:'></CellDirective>
                          <CellDirective value='8698.84' format={getFormatFromType('Currency')}></CellDirective>
                      </CellsDirective>
                  </RowDirective>
                  <RowDirective>
                      <CellsDirective>
                          <CellDirective index={1} value='Number of Payments:'></CellDirective>
                          <CellDirective value='12'></CellDirective>
                      </CellsDirective>
                  </RowDirective>
                  <RowDirective>
                      <CellsDirective>
                          <CellDirective index={1} value='Total Repayment Amount:'></CellDirective>
                          <CellDirective value='104386.11' format={getFormatFromType('Currency')}></CellDirective>
                      </CellsDirective>
                  </RowDirective>
                  <RowDirective>
                      <CellsDirective>
                          <CellDirective index={1} value='Total Interest Amount:'></CellDirective>
                          <CellDirective value='4386.11' format={getFormatFromType('Currency')}></CellDirective>
                      </CellsDirective>
                  </RowDirective>
              </RowsDirective>
              <ColumnsDirective>
                  <ColumnDirective index={1} width={190}></ColumnDirective>
                  <ColumnDirective width={100}></ColumnDirective>
              </ColumnsDirective>
          </SheetDirective>
          <SheetDirective name='EMI Schedule'>
              <RangesDirective>
                  <RangeDirective dataSource={protectSheetData}></RangeDirective>
              </RangesDirective>
              <ColumnsDirective>
                  <ColumnDirective index={1} width={110}></ColumnDirective>
                  <ColumnDirective width={85}></ColumnDirective>
                  <ColumnDirective width={85}></ColumnDirective>
                  <ColumnDirective width={80}></ColumnDirective>
                  <ColumnDirective width={90}></ColumnDirective>
              </ColumnsDirective>
            </SheetDirective>
        </SheetsDirective>
      </SpreadsheetComponent>
    </div>
  );
}

export default App;
