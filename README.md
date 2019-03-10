# BlueHarvestDropdown

Demo an error with material dropdowns and blue-harvest.

* Clone the repo
* run `npm install`
* run `npm run e2e`

An error should be displayed:
```
Looking for Favorite food failed. More than one element is displayed, number of displayed elements: 2
      Elements:
      <span class="mat-select-placeholder ng-tns-c2-1 ng-star-inserted">Favorite food</span>
      <label class="mat-form-field-label ng-tns-c1-0 mat-empty mat-form-field-empty ng-star-inserted" ng-reflect-ng-switch="false" ng-reflect-disabled="true" id="mat-form-field-label-1" for="mat-select-0" aria-owns="mat-select-0"><!--bindings={
        "ng-reflect-ng-switch-case": "false"
      }--><!---->Favorite food<!--bindings={
        "ng-reflect-ng-switch-case": "true"
      }--><!--bindings={
        "ng-reflect-ng-if": "false"
      }--></label>

          at Object.<anonymous> (C:\Code\Playground\Blue-Harvest-Dropdowns\blue-harvest-dropdown\node_modules\blue-harvest\action_helpers\find.ts:106:11)
          at Generator.throw (<anonymous>)
          at rejected (C:\Code\Playground\Blue-Harvest-Dropdowns\blue-harvest-dropdown\node_modules\blue-harvest\dist\action_helpers\find.js:5:65)
          at <anonymous>
          at process._tickCallback (internal/process/next_tick.js:189:7)
      From asynchronous test:
      Error
          at Suite.<anonymous> (C:\Code\Playground\Blue-Harvest-Dropdowns\blue-harvest-dropdown\e2e\src\app.e2e-spec.ts:15:3)
          at Object.<anonymous> (C:\Code\Playground\Blue-Harvest-Dropdowns\blue-harvest-dropdown\e2e\src\app.e2e-spec.ts:4:1)
          at Module._compile (module.js:653:30)
          at Module.m._compile (C:\Code\Playground\Blue-Harvest-Dropdowns\blue-harvest-dropdown\node_modules\ts-node\src\index.ts:439:23)
          at Module._extensions..js (module.js:664:10)
          at Object.require.extensions.(anonymous function) [as .ts] (C:\Code\Playground\Blue-Harvest-Dropdowns\blue-harvest-dropdown\node_modules\ts-node\src\index.ts:442:12)
```
