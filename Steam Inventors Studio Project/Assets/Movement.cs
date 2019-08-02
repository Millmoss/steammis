using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Movement : MonoBehaviour
{
    public GameObject food;
    private Vector3 v = new Vector3(0, 4, 9);

    void OnTriggerEnter(Collider trigger)
    {


        GameObject foodPosition = Instantiate<GameObject>(food);
        foodPosition.transform.position = new Vector3(0, 4, 9);
        Destroy(food);

    }
   
}