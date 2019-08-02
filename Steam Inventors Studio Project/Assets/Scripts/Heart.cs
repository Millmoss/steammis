using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TriggerScript : MonoBehaviour
{

    public GameObject h;
    // Start is called before the first frame update

       
    void OnTriggerEnter(Collider Other)
    {


        GameObject temp = Instantiate<GameObject>(h);
        temp.transform.position = new Vector3(0, 10, -0.5f);
        Destroy(gameObject);

    }


    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {

    }
}
