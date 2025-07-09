# RoutesV2OrganizationOverview

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Disabled** | **int32** |  | 
**Egress** | Pointer to [**ModelsDataUsage**](ModelsDataUsage.md) |  | [optional] 
**Errors** | Pointer to **int32** |  | [optional] 
**Healthy** | **int32** |  | 
**Ingress** | Pointer to [**ModelsDataUsage**](ModelsDataUsage.md) |  | [optional] 
**Unhealthy** | **int32** |  | 

## Methods

### NewRoutesV2OrganizationOverview

`func NewRoutesV2OrganizationOverview(disabled int32, healthy int32, unhealthy int32, ) *RoutesV2OrganizationOverview`

NewRoutesV2OrganizationOverview instantiates a new RoutesV2OrganizationOverview object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutesV2OrganizationOverviewWithDefaults

`func NewRoutesV2OrganizationOverviewWithDefaults() *RoutesV2OrganizationOverview`

NewRoutesV2OrganizationOverviewWithDefaults instantiates a new RoutesV2OrganizationOverview object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDisabled

`func (o *RoutesV2OrganizationOverview) GetDisabled() int32`

GetDisabled returns the Disabled field if non-nil, zero value otherwise.

### GetDisabledOk

`func (o *RoutesV2OrganizationOverview) GetDisabledOk() (*int32, bool)`

GetDisabledOk returns a tuple with the Disabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisabled

`func (o *RoutesV2OrganizationOverview) SetDisabled(v int32)`

SetDisabled sets Disabled field to given value.


### GetEgress

`func (o *RoutesV2OrganizationOverview) GetEgress() ModelsDataUsage`

GetEgress returns the Egress field if non-nil, zero value otherwise.

### GetEgressOk

`func (o *RoutesV2OrganizationOverview) GetEgressOk() (*ModelsDataUsage, bool)`

GetEgressOk returns a tuple with the Egress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEgress

`func (o *RoutesV2OrganizationOverview) SetEgress(v ModelsDataUsage)`

SetEgress sets Egress field to given value.

### HasEgress

`func (o *RoutesV2OrganizationOverview) HasEgress() bool`

HasEgress returns a boolean if a field has been set.

### GetErrors

`func (o *RoutesV2OrganizationOverview) GetErrors() int32`

GetErrors returns the Errors field if non-nil, zero value otherwise.

### GetErrorsOk

`func (o *RoutesV2OrganizationOverview) GetErrorsOk() (*int32, bool)`

GetErrorsOk returns a tuple with the Errors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrors

`func (o *RoutesV2OrganizationOverview) SetErrors(v int32)`

SetErrors sets Errors field to given value.

### HasErrors

`func (o *RoutesV2OrganizationOverview) HasErrors() bool`

HasErrors returns a boolean if a field has been set.

### GetHealthy

`func (o *RoutesV2OrganizationOverview) GetHealthy() int32`

GetHealthy returns the Healthy field if non-nil, zero value otherwise.

### GetHealthyOk

`func (o *RoutesV2OrganizationOverview) GetHealthyOk() (*int32, bool)`

GetHealthyOk returns a tuple with the Healthy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHealthy

`func (o *RoutesV2OrganizationOverview) SetHealthy(v int32)`

SetHealthy sets Healthy field to given value.


### GetIngress

`func (o *RoutesV2OrganizationOverview) GetIngress() ModelsDataUsage`

GetIngress returns the Ingress field if non-nil, zero value otherwise.

### GetIngressOk

`func (o *RoutesV2OrganizationOverview) GetIngressOk() (*ModelsDataUsage, bool)`

GetIngressOk returns a tuple with the Ingress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIngress

`func (o *RoutesV2OrganizationOverview) SetIngress(v ModelsDataUsage)`

SetIngress sets Ingress field to given value.

### HasIngress

`func (o *RoutesV2OrganizationOverview) HasIngress() bool`

HasIngress returns a boolean if a field has been set.

### GetUnhealthy

`func (o *RoutesV2OrganizationOverview) GetUnhealthy() int32`

GetUnhealthy returns the Unhealthy field if non-nil, zero value otherwise.

### GetUnhealthyOk

`func (o *RoutesV2OrganizationOverview) GetUnhealthyOk() (*int32, bool)`

GetUnhealthyOk returns a tuple with the Unhealthy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUnhealthy

`func (o *RoutesV2OrganizationOverview) SetUnhealthy(v int32)`

SetUnhealthy sets Unhealthy field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


