# PagerdutyAlertsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Class** | Pointer to **string** | Class defines the class/type of the event based on the input source. Defaults to an empty value. | [optional] 
**Group** | Pointer to **string** | A cluster or grouping of sources. For example, sources \\\&quot;prod-datapipe-02\\\&quot; and \\\&quot;prod-datapipe-03\\\&quot; might both be part of \\\&quot;prod-datapipe\\\&quot;. Applicable if event type is set to alerts. Defaults to an empty value. | [optional] 
**Severity** | Pointer to **string** | Indicates the severity of the impact to the affected system. Applicable for you if event type is set to alerts. Defaults to &#39;critical&#39;. | [optional] 

## Methods

### NewPagerdutyAlertsConfig

`func NewPagerdutyAlertsConfig() *PagerdutyAlertsConfig`

NewPagerdutyAlertsConfig instantiates a new PagerdutyAlertsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPagerdutyAlertsConfigWithDefaults

`func NewPagerdutyAlertsConfigWithDefaults() *PagerdutyAlertsConfig`

NewPagerdutyAlertsConfigWithDefaults instantiates a new PagerdutyAlertsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetClass

`func (o *PagerdutyAlertsConfig) GetClass() string`

GetClass returns the Class field if non-nil, zero value otherwise.

### GetClassOk

`func (o *PagerdutyAlertsConfig) GetClassOk() (*string, bool)`

GetClassOk returns a tuple with the Class field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClass

`func (o *PagerdutyAlertsConfig) SetClass(v string)`

SetClass sets Class field to given value.

### HasClass

`func (o *PagerdutyAlertsConfig) HasClass() bool`

HasClass returns a boolean if a field has been set.

### GetGroup

`func (o *PagerdutyAlertsConfig) GetGroup() string`

GetGroup returns the Group field if non-nil, zero value otherwise.

### GetGroupOk

`func (o *PagerdutyAlertsConfig) GetGroupOk() (*string, bool)`

GetGroupOk returns a tuple with the Group field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroup

`func (o *PagerdutyAlertsConfig) SetGroup(v string)`

SetGroup sets Group field to given value.

### HasGroup

`func (o *PagerdutyAlertsConfig) HasGroup() bool`

HasGroup returns a boolean if a field has been set.

### GetSeverity

`func (o *PagerdutyAlertsConfig) GetSeverity() string`

GetSeverity returns the Severity field if non-nil, zero value otherwise.

### GetSeverityOk

`func (o *PagerdutyAlertsConfig) GetSeverityOk() (*string, bool)`

GetSeverityOk returns a tuple with the Severity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSeverity

`func (o *PagerdutyAlertsConfig) SetSeverity(v string)`

SetSeverity sets Severity field to given value.

### HasSeverity

`func (o *PagerdutyAlertsConfig) HasSeverity() bool`

HasSeverity returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


