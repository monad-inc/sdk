# Sentinelv2ManagedDCRVariant

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DcrResourceId** | **string** | The full ARM resource ID of the customer&#39;s DCR, cloned per pod. e.g. /subscriptions/&lt;sub&gt;/resourceGroups/&lt;rg&gt;/providers/Microsoft.Insights/dataCollectionRules/&lt;name&gt; | 

## Methods

### NewSentinelv2ManagedDCRVariant

`func NewSentinelv2ManagedDCRVariant(dcrResourceId string, ) *Sentinelv2ManagedDCRVariant`

NewSentinelv2ManagedDCRVariant instantiates a new Sentinelv2ManagedDCRVariant object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSentinelv2ManagedDCRVariantWithDefaults

`func NewSentinelv2ManagedDCRVariantWithDefaults() *Sentinelv2ManagedDCRVariant`

NewSentinelv2ManagedDCRVariantWithDefaults instantiates a new Sentinelv2ManagedDCRVariant object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDcrResourceId

`func (o *Sentinelv2ManagedDCRVariant) GetDcrResourceId() string`

GetDcrResourceId returns the DcrResourceId field if non-nil, zero value otherwise.

### GetDcrResourceIdOk

`func (o *Sentinelv2ManagedDCRVariant) GetDcrResourceIdOk() (*string, bool)`

GetDcrResourceIdOk returns a tuple with the DcrResourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDcrResourceId

`func (o *Sentinelv2ManagedDCRVariant) SetDcrResourceId(v string)`

SetDcrResourceId sets DcrResourceId field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


