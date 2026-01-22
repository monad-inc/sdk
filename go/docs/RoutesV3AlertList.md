# RoutesV3AlertList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Alerts** | Pointer to [**[]GithubComMonadIncAlertsModelsAlert**](GithubComMonadIncAlertsModelsAlert.md) |  | [optional] 
**Total** | Pointer to **int32** |  | [optional] 

## Methods

### NewRoutesV3AlertList

`func NewRoutesV3AlertList() *RoutesV3AlertList`

NewRoutesV3AlertList instantiates a new RoutesV3AlertList object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutesV3AlertListWithDefaults

`func NewRoutesV3AlertListWithDefaults() *RoutesV3AlertList`

NewRoutesV3AlertListWithDefaults instantiates a new RoutesV3AlertList object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAlerts

`func (o *RoutesV3AlertList) GetAlerts() []GithubComMonadIncAlertsModelsAlert`

GetAlerts returns the Alerts field if non-nil, zero value otherwise.

### GetAlertsOk

`func (o *RoutesV3AlertList) GetAlertsOk() (*[]GithubComMonadIncAlertsModelsAlert, bool)`

GetAlertsOk returns a tuple with the Alerts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlerts

`func (o *RoutesV3AlertList) SetAlerts(v []GithubComMonadIncAlertsModelsAlert)`

SetAlerts sets Alerts field to given value.

### HasAlerts

`func (o *RoutesV3AlertList) HasAlerts() bool`

HasAlerts returns a boolean if a field has been set.

### GetTotal

`func (o *RoutesV3AlertList) GetTotal() int32`

GetTotal returns the Total field if non-nil, zero value otherwise.

### GetTotalOk

`func (o *RoutesV3AlertList) GetTotalOk() (*int32, bool)`

GetTotalOk returns a tuple with the Total field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotal

`func (o *RoutesV3AlertList) SetTotal(v int32)`

SetTotal sets Total field to given value.

### HasTotal

`func (o *RoutesV3AlertList) HasTotal() bool`

HasTotal returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


