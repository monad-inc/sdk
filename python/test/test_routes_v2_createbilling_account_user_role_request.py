# coding: utf-8

"""
    Monad Swagger API

    This is the monad API

    The version of the OpenAPI document: 1.0
    Contact: support@swagger.io
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from monad.models.routes_v2_createbilling_account_user_role_request import RoutesV2CreatebillingAccountUserRoleRequest

class TestRoutesV2CreatebillingAccountUserRoleRequest(unittest.TestCase):
    """RoutesV2CreatebillingAccountUserRoleRequest unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> RoutesV2CreatebillingAccountUserRoleRequest:
        """Test RoutesV2CreatebillingAccountUserRoleRequest
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `RoutesV2CreatebillingAccountUserRoleRequest`
        """
        model = RoutesV2CreatebillingAccountUserRoleRequest()
        if include_optional:
            return RoutesV2CreatebillingAccountUserRoleRequest(
                user_email = ''
            )
        else:
            return RoutesV2CreatebillingAccountUserRoleRequest(
                user_email = '',
        )
        """

    def testRoutesV2CreatebillingAccountUserRoleRequest(self):
        """Test RoutesV2CreatebillingAccountUserRoleRequest"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
