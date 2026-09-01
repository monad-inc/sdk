# CoralogixCommunicationConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rest** | [**CoralogixRESTVariant**](CoralogixRESTVariant.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from monad.models.coralogix_communication_config import CoralogixCommunicationConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CoralogixCommunicationConfig from a JSON string
coralogix_communication_config_instance = CoralogixCommunicationConfig.from_json(json)
# print the JSON string representation of the object
print(CoralogixCommunicationConfig.to_json())

# convert the object into a dict
coralogix_communication_config_dict = coralogix_communication_config_instance.to_dict()
# create an instance of CoralogixCommunicationConfig from a dict
coralogix_communication_config_from_dict = CoralogixCommunicationConfig.from_dict(coralogix_communication_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


