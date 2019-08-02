using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TriggerScript : MonoBehaviour
{
    public Collider trigger;
    public GameObject heart;
   
    bool hit = false;
    private Vector3 vec = new Vector3 (0, 10.0f, 0);

    void OnTriggerEnter(Collider trigger)
    {
        if (trigger.tag == "Respawn")
        {
            Instantiate(heart, vec, Quaternion.identity);
            hit = true;
        }
    }
}