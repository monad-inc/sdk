# coding: utf-8

"""
    Monad API

    This is the monad API

    The version of the OpenAPI document: 1.0
    Contact: support@swagger.io
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from monad.models.routes_v3_get_feature_flag_response import RoutesV3GetFeatureFlagResponse

class TestRoutesV3GetFeatureFlagResponse(unittest.TestCase):
    """RoutesV3GetFeatureFlagResponse unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> RoutesV3GetFeatureFlagResponse:
        """Test RoutesV3GetFeatureFlagResponse
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `RoutesV3GetFeatureFlagResponse`
        """
        model = RoutesV3GetFeatureFlagResponse()
        if include_optional:
            return RoutesV3GetFeatureFlagResponse(
                user = [
                    monad.models.flagsmith/flag.flagsmith.Flag(
                        enabled = True, 
                        feature_id = 56, 
                        feature_name = '', 
                        is_default = True, 
                        value = null, )
                    ]
            )
        else:
            return RoutesV3GetFeatureFlagResponse(
        )
        """

    def testRoutesV3GetFeatureFlagResponse(self):
        """Test RoutesV3GetFeatureFlagResponse"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
