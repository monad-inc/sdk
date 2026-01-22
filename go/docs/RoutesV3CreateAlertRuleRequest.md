# RoutesV3CreateAlertRuleRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Active** | Pointer to **bool** | Active indicates whether the alert rule is active | [optional] 
**Description** | Pointer to **string** | Description of the alert rule | [optional] 
**Name** | Pointer to **string** | Name of the alert rule | [optional] 
**PipelineIds** | Pointer to **[]string** | Pipeline IDs that this alert rule applies to | [optional] 
**RuleConfig** | Pointer to **map[string]interface{}** | RuleConfig contains the configuration for the alert rule | [optional] 
**Severity** | Pointer to **string** | Severity level of the alert (e.g., \&quot;critical\&quot;, \&quot;warning\&quot;, \&quot;info\&quot;) | [optional] 
**Type** | Pointer to **string** | Type of the alert rule | [optional] 

## Methods

### NewRoutesV3CreateAlertRuleRequest

`func NewRoutesV3CreateAlertRuleRequest() *RoutesV3CreateAlertRuleRequest`

NewRoutesV3CreateAlertRuleRequest instantiates a new RoutesV3CreateAlertRuleRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutesV3CreateAlertRuleRequestWithDefaults

`func NewRoutesV3CreateAlertRuleRequestWithDefaults() *RoutesV3CreateAlertRuleRequest`

NewRoutesV3CreateAlertRuleRequestWithDefaults instantiates a new RoutesV3CreateAlertRuleRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActive

`func (o *RoutesV3CreateAlertRuleRequest) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *RoutesV3CreateAlertRuleRequest) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *RoutesV3CreateAlertRuleRequest) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *RoutesV3CreateAlertRuleRequest) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetDescription

`func (o *RoutesV3CreateAlertRuleRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *RoutesV3CreateAlertRuleRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *RoutesV3CreateAlertRuleRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *RoutesV3CreateAlertRuleRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetName

`func (o *RoutesV3CreateAlertRuleRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *RoutesV3CreateAlertRuleRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *RoutesV3CreateAlertRuleRequest) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *RoutesV3CreateAlertRuleRequest) HasName() bool`

HasName returns a boolean if a field has been set.

### GetPipelineIds

`func (o *RoutesV3CreateAlertRuleRequest) GetPipelineIds() []string`

GetPipelineIds returns the PipelineIds field if non-nil, zero value otherwise.

### GetPipelineIdsOk

`func (o *RoutesV3CreateAlertRuleRequest) GetPipelineIdsOk() (*[]string, bool)`

GetPipelineIdsOk returns a tuple with the PipelineIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPipelineIds

`func (o *RoutesV3CreateAlertRuleRequest) SetPipelineIds(v []string)`

SetPipelineIds sets PipelineIds field to given value.

### HasPipelineIds

`func (o *RoutesV3CreateAlertRuleRequest) HasPipelineIds() bool`

HasPipelineIds returns a boolean if a field has been set.

### GetRuleConfig

`func (o *RoutesV3CreateAlertRuleRequest) GetRuleConfig() map[string]interface{}`

GetRuleConfig returns the RuleConfig field if non-nil, zero value otherwise.

### GetRuleConfigOk

`func (o *RoutesV3CreateAlertRuleRequest) GetRuleConfigOk() (*map[string]interface{}, bool)`

GetRuleConfigOk returns a tuple with the RuleConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRuleConfig

`func (o *RoutesV3CreateAlertRuleRequest) SetRuleConfig(v map[string]interface{})`

SetRuleConfig sets RuleConfig field to given value.

### HasRuleConfig

`func (o *RoutesV3CreateAlertRuleRequest) HasRuleConfig() bool`

HasRuleConfig returns a boolean if a field has been set.

### GetSeverity

`func (o *RoutesV3CreateAlertRuleRequest) GetSeverity() string`

GetSeverity returns the Severity field if non-nil, zero value otherwise.

### GetSeverityOk

`func (o *RoutesV3CreateAlertRuleRequest) GetSeverityOk() (*string, bool)`

GetSeverityOk returns a tuple with the Severity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSeverity

`func (o *RoutesV3CreateAlertRuleRequest) SetSeverity(v string)`

SetSeverity sets Severity field to given value.

### HasSeverity

`func (o *RoutesV3CreateAlertRuleRequest) HasSeverity() bool`

HasSeverity returns a boolean if a field has been set.

### GetType

`func (o *RoutesV3CreateAlertRuleRequest) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *RoutesV3CreateAlertRuleRequest) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *RoutesV3CreateAlertRuleRequest) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *RoutesV3CreateAlertRuleRequest) HasType() bool`

HasType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


