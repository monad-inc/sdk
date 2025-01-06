# RoutesV2ListTemplatesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**templates** | **List[str]** |  | [optional] 

## Example

```python
from monad.models.routes_v2_list_templates_response import RoutesV2ListTemplatesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV2ListTemplatesResponse from a JSON string
routes_v2_list_templates_response_instance = RoutesV2ListTemplatesResponse.from_json(json)
# print the JSON string representation of the object
print(RoutesV2ListTemplatesResponse.to_json())

# convert the object into a dict
routes_v2_list_templates_response_dict = routes_v2_list_templates_response_instance.to_dict()
# create an instance of RoutesV2ListTemplatesResponse from a dict
routes_v2_list_templates_response_from_dict = RoutesV2ListTemplatesResponse.from_dict(routes_v2_list_templates_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


