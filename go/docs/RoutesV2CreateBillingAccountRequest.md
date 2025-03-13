# RoutesV2CreateBillingAccountRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BillingEmail** | **string** | Email address for billing | 
**Description** | Pointer to **string** | Description of the billing account | [optional] 
**Name** | **string** | Name of the billing account | 

## Methods

### NewRoutesV2CreateBillingAccountRequest

`func NewRoutesV2CreateBillingAccountRequest(billingEmail string, name string, ) *RoutesV2CreateBillingAccountRequest`

NewRoutesV2CreateBillingAccountRequest instantiates a new RoutesV2CreateBillingAccountRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutesV2CreateBillingAccountRequestWithDefaults

`func NewRoutesV2CreateBillingAccountRequestWithDefaults() *RoutesV2CreateBillingAccountRequest`

NewRoutesV2CreateBillingAccountRequestWithDefaults instantiates a new RoutesV2CreateBillingAccountRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBillingEmail

`func (o *RoutesV2CreateBillingAccountRequest) GetBillingEmail() string`

GetBillingEmail returns the BillingEmail field if non-nil, zero value otherwise.

### GetBillingEmailOk

`func (o *RoutesV2CreateBillingAccountRequest) GetBillingEmailOk() (*string, bool)`

GetBillingEmailOk returns a tuple with the BillingEmail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBillingEmail

`func (o *RoutesV2CreateBillingAccountRequest) SetBillingEmail(v string)`

SetBillingEmail sets BillingEmail field to given value.


### GetDescription

`func (o *RoutesV2CreateBillingAccountRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *RoutesV2CreateBillingAccountRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *RoutesV2CreateBillingAccountRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *RoutesV2CreateBillingAccountRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetName

`func (o *RoutesV2CreateBillingAccountRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *RoutesV2CreateBillingAccountRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *RoutesV2CreateBillingAccountRequest) SetName(v string)`

SetName sets Name field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


